// Sei Shōnagon's Lists for the Activity Page
// Extracted from the main pillow book data

const SEI_LISTS = [
    {
        id: "in_spring_the_dawn",
        title: "In spring, the dawn…",
        seiItems: [
            "In spring, the dawn - when the slowly paling mountain rim is tinged with red, and wisps of faintly crimson-purple cloud float in the sky",
            "In summer, the night - moonlit nights, of course, but also at the dark of the moon, it's beautiful when fireflies are dancing everywhere",
            "In autumn, the evening - the blazing sun has sunk very close to the mountain rim, and now even the crows, going home to their nests, are a moving sight",
            "In winter, the early morning - the cold is delightful when snow has fallen, but even without it, when it's very cold and they hasten to build up the fires, the sight of the glowing charcoal being carried through the rooms is most delightful"
        ]
    },
    {
        id: "things_that_make_heart_beat_fast",
        title: "Things That Make Your Heart Beat Fast",
        seiItems: [
            "Sparrows feeding their young",
            "Passing a place where tiny children are playing",
            "A censer with incense burning, discovered when you've woken in the night",
            "To wash your hair, apply your makeup, and put on clothes that are well-scented with incense - even if you're somewhere no one special will see you, you still feel a heady sense of pleasure inside"
        ]
    },
    {
        id: "things_that_make_you_nostalgic",
        title: "Things That Make You Feel Nostalgic",
        seiItems: [
            "Dried hollyhock from the Kamo Festival",
            "A scrap of violet-coloured cloth, pressed into a book and discovered when you're rummaging about",
            "A rainy day when you have nothing to do, and old letters come to hand",
            "Last year's summer fan"
        ]
    },
    {
        id: "small_wonders_in_nature",
        title: "Small Wonders in Nature",
        seiItems: [
            "The snap-beetle is also touching. Though it's a mere insect, it has apparently dedicated itself to the Buddhist Way, for it continually touches its forehead to the ground in prayer as it walks along",
            "It's fascinating the way you find it wandering about in astonishingly dark places, making that clicking sound",
            "The firefly's glow is also wonderful",
            "The tiny crab deftly picking its way between stones, so small you can barely see it"
        ]
    },
    {
        id: "fleeting_beauty",
        title: "Fleeting Beauty",
        seiItems: [
            "On a bright moonlit night, when your carriage is crossing a stream, it's lovely the way the water will spray up in shining drops at the ox's tread, like shattered crystal",
            "Early morning dew still on the garden plants, making each blade of grass sparkle",
            "Snow that falls and melts before it reaches the ground",
            "The way mist lingers in the valleys at dawn, then burns away with the rising sun"
        ]
    }
];

let currentModal = null;
let userLists = {};

// Admin mode - access via ?admin=true in URL
const isAdminMode = new URLSearchParams(window.location.search).get('admin') === 'true';

// Load from localStorage initially as fallback
try {
    userLists = JSON.parse(localStorage.getItem('pillowBookUserLists')) || {};
} catch (e) {
    console.warn('Could not load from localStorage:', e);
    userLists = {};
}

// Load lists from Firestore
async function loadListsFromFirestore() {
    if (!window.firebaseDB) {
        console.warn('Firebase not ready, using localStorage only');
        return;
    }

    try {
        const listsCollection = window.firebaseCollection(window.firebaseDB, 'userLists');
        const snapshot = await window.firebaseGetDocs(listsCollection);

        // Replace local data with Firestore data (Firestore is source of truth)
        const firestoreLists = {};

        snapshot.forEach((doc) => {
            const data = doc.data();
            const listId = data.listId;

            if (!firestoreLists[listId]) {
                firestoreLists[listId] = [];
            }

            firestoreLists[listId].push({
                items: data.items,
                author: data.author,
                date: data.date,
                timestamp: data.timestamp,
                firestoreId: doc.id
            });
        });

        // Sort each list by timestamp (newest first)
        Object.keys(firestoreLists).forEach(listId => {
            firestoreLists[listId].sort((a, b) => b.timestamp - a.timestamp);
        });

        // Replace local data with Firestore data
        userLists = firestoreLists;

        // Update localStorage with Firestore data
        localStorage.setItem('pillowBookUserLists', JSON.stringify(userLists));

        // Re-render with loaded data
        renderActivityGrid();
        console.log('Lists loaded from Firestore');
    } catch (error) {
        console.error('Error loading from Firestore:', error);
    }
}

// Save a single list to Firestore
async function saveListToFirestore(listId, userList) {
    if (!window.firebaseDB) {
        console.warn('Firebase not ready, saved to localStorage only');
        return null;
    }

    try {
        const listsCollection = window.firebaseCollection(window.firebaseDB, 'userLists');
        const docRef = await window.firebaseAddDoc(listsCollection, {
            listId: listId,
            items: userList.items,
            author: userList.author,
            date: userList.date,
            timestamp: userList.timestamp
        });
        console.log('List saved to Firestore with ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Error saving to Firestore:', error);
        return null;
    }
}

// Update an existing list in Firestore
async function updateListInFirestore(firestoreId, userList) {
    if (!window.firebaseDB || !firestoreId) {
        console.warn('Firebase not ready or no firestoreId, saved to localStorage only');
        return;
    }

    try {
        const docRef = window.firebaseDoc(window.firebaseDB, 'userLists', firestoreId);
        await window.firebaseUpdateDoc(docRef, {
            items: userList.items,
            author: userList.author,
            date: userList.date,
            timestamp: userList.timestamp
        });
        console.log('List updated in Firestore');
    } catch (error) {
        console.error('Error updating in Firestore:', error);
    }
}

// Delete a list from Firestore (admin only)
async function deleteListFromFirestore(firestoreId) {
    if (!window.firebaseDB || !firestoreId) {
        console.warn('Cannot delete: Firebase not ready or no firestoreId');
        return false;
    }

    try {
        const { deleteDoc } = await import('https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js');
        const docRef = window.firebaseDoc(window.firebaseDB, 'userLists', firestoreId);
        await deleteDoc(docRef);
        console.log('List deleted from Firestore');
        return true;
    } catch (error) {
        console.error('Error deleting from Firestore:', error);
        return false;
    }
}

// Admin delete handler
async function adminDeleteList(listId, index, event) {
    event.stopPropagation(); // Prevent triggering edit

    if (!isAdminMode) return;

    const userList = userLists[listId][index];
    const confirmMsg = `Delete this list?\n\n"${userList.items.slice(0, 2).join(', ')}..."`;

    if (!confirm(confirmMsg)) return;

    // Delete from Firestore
    if (userList.firestoreId) {
        await deleteListFromFirestore(userList.firestoreId);
    }

    // Remove from local array
    userLists[listId].splice(index, 1);

    // Update localStorage
    localStorage.setItem('pillowBookUserLists', JSON.stringify(userLists));

    // Re-render
    renderActivityGrid();
}

// Content filter for inappropriate language and sexual content
const inappropriateWords = [
    // General profanity
    'damn', 'hell', 'shit', 'fuck', 'ass', 'bitch', 'bastard', 'crap',
    'piss', 'dickhead', 'asshole', 'motherfucker',
    // Sexual content
    'sex', 'porn', 'nude', 'naked', 'penis', 'vagina', 'breast', 'boobs',
    'horny', 'sexy', 'orgasm', 'masturbate', 'erotic', 'aroused', 'climax',
    'intercourse', 'intimate', 'seductive', 'sensual', 'lust', 'desire',
    'whore', 'slut', 'hooker', 'prostitute', 'escort', 'stripper',
    'cock', 'dick', 'pussy', 'tits', 'anal', 'oral', 'blow', 'suck',
    'cum', 'sperm', 'ejaculate', 'genitals', 'condom', 'viagra'
    // Add more as needed
];

function containsInappropriateContent(text) {
    const lowerText = text.toLowerCase();
    return inappropriateWords.some(word => {
        // Check for the word with word boundaries to avoid false positives
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        return regex.test(lowerText);
    });
}

function initializeActivity() {
    renderActivityGrid();
}

function renderActivityGrid() {
    const grid = document.getElementById('activityGrid');
    
    grid.innerHTML = SEI_LISTS.map(list => `
        <div class="list-category">
            <div class="category-title">${list.title}</div>
            <div class="sticky-notes-row">
                <div class="sticky-note sei-note">
                    <div class="note-header">Sei Shōnagon c. 1000 CE</div>
                    <div class="note-content">
                        <ul>
                            ${list.seiItems.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                ${renderUserNotes(list.id)}
                
                <div class="add-note-btn" onclick="openModal('${list.id}', '${list.title}')">
                    <span class="icon">+</span>
                    <span>Add your own list</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderUserNotes(listId) {
    if (!userLists[listId]) return '';

    return userLists[listId].map((userList, index) => {
        const editWindowMs = 60000;
        const timeSinceCreation = Date.now() - userList.timestamp;
        const isEditable = timeSinceCreation <= editWindowMs;
        const editableClass = isEditable ? 'editable' : '';
        const editableIndicator = isEditable ? ' <span style="color: #4caf50; font-size: 0.8em;">✏️</span>' : '';

        // Admin delete button
        const deleteBtn = isAdminMode ? `
            <button onclick="adminDeleteList('${listId}', ${index}, event)"
                    style="position: absolute; top: 5px; right: 5px; background: #e74c3c; color: white;
                           border: none; border-radius: 50%; width: 22px; height: 22px; cursor: pointer;
                           font-size: 14px; line-height: 1; font-weight: bold;">×</button>
        ` : '';

        return `
        <div class="sticky-note user-note ${editableClass}" onclick="editUserList('${listId}', ${index})" style="position: relative;">
            ${deleteBtn}
            <div class="note-header">${userList.author ? userList.author + ' • ' : 'Anonymous • '}${userList.date}${editableIndicator}</div>
            <div class="note-content">
                <ul>
                    ${userList.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }).join('');
}

function openModal(listId, listTitle) {
    currentModal = { listId, listTitle, editIndex: null };
    
    document.getElementById('modalTitle').textContent = `Add Your "${listTitle}"`;
    document.getElementById('listInput').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('listModal').style.display = 'block';
}

function editUserList(listId, index) {
    const userList = userLists[listId][index];
    const listTitle = SEI_LISTS.find(l => l.id === listId).title;
    
    // Check if edit window has expired (1 minute = 60000ms)
    const editWindowMs = 60000;
    const timeSinceCreation = Date.now() - userList.timestamp;
    
    if (timeSinceCreation > editWindowMs) {
        return;
    }
    
    currentModal = { listId, listTitle, editIndex: index };
    
    document.getElementById('modalTitle').textContent = `Edit Your "${listTitle}"`;
    document.getElementById('listInput').value = userList.items.join('\n');
    document.getElementById('authorName').value = userList.author || '';
    document.getElementById('listModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('listModal').style.display = 'none';
    currentModal = null;
}

let isSaving = false;

async function saveUserList() {
    if (!currentModal) return;
    if (isSaving) return; // Prevent double-clicks

    const input = document.getElementById('listInput').value.trim();
    const authorName = document.getElementById('authorName').value.trim();

    if (!input) return;

    // Check for inappropriate content in both list content and author name
    if (containsInappropriateContent(input)) {
        alert('Please keep your list family-friendly and in the spirit of Sei Shōnagon\'s refined observations.');
        return;
    }

    if (authorName && containsInappropriateContent(authorName)) {
        alert('Please use an appropriate name.');
        return;
    }

    const items = input.split('\n')
        .map(item => item.trim())
        .filter(item => item.length > 0);

    if (items.length === 0) return;

    // Set saving state and update button
    isSaving = true;
    const saveBtn = document.querySelector('.modal-btn.save');
    if (saveBtn) {
        saveBtn.textContent = 'Saving...';
        saveBtn.disabled = true;
    }

    const userList = {
        items: items,
        author: authorName || null,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now()
    };

    if (!userLists[currentModal.listId]) {
        userLists[currentModal.listId] = [];
    }

    if (currentModal.editIndex !== null) {
        // Editing existing list - preserve firestoreId
        const existingList = userLists[currentModal.listId][currentModal.editIndex];
        userList.firestoreId = existingList.firestoreId;
        userLists[currentModal.listId][currentModal.editIndex] = userList;

        // Update in Firestore
        if (userList.firestoreId) {
            await updateListInFirestore(userList.firestoreId, userList);
        }
    } else {
        // Adding new list
        userLists[currentModal.listId].push(userList);

        // Save to Firestore and get the document ID
        const firestoreId = await saveListToFirestore(currentModal.listId, userList);
        if (firestoreId) {
            userList.firestoreId = firestoreId;
        }
    }

    // Save to localStorage as backup
    localStorage.setItem('pillowBookUserLists', JSON.stringify(userLists));

    // Re-render and close modal
    renderActivityGrid();
    closeModal();

    // Reset saving state
    isSaving = false;
    const saveBtn = document.querySelector('.modal-btn.save');
    if (saveBtn) {
        saveBtn.textContent = 'Save List';
        saveBtn.disabled = false;
    }
}

// Modal event handlers
document.addEventListener('DOMContentLoaded', function() {
    initializeActivity();

    // Close modal when clicking X or outside
    document.querySelector('.close').onclick = closeModal;

    window.onclick = function(event) {
        const modal = document.getElementById('listModal');
        if (event.target === modal) {
            closeModal();
        }
    }

    // Load from Firestore when Firebase is ready
    if (window.firebaseReady) {
        loadListsFromFirestore();
    } else {
        window.addEventListener('firebaseReady', () => {
            loadListsFromFirestore();
        });
    }
});

// Make adminDeleteList available globally for onclick handlers
window.adminDeleteList = adminDeleteList;

// Export function for potential integration with main site
window.pillowBookActivity = {
    getUserLists: () => userLists,
    clearUserData: () => {
        localStorage.removeItem('pillowBookUserLists');
        userLists = {};
        renderActivityGrid();
    }
};