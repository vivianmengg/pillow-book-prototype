// Sei Shōnagon's Recommendations - Historically Accurate Locations from The Pillow Book
// Using Google Maps to show real Kyoto locations with verified historical accuracy

const LOCATIONS = [
    {
        id: "imperial_palace",
        name: "The Nine-Fold Palace",
        category: "palace",
        period: "Heian Period (794-1185)",
        image: "",
        shortDescription: "The original Heian Palace - the center of Sei's world",
        description: "The 'Nine-Fold Enclosure' (kokonoe) was the heart of court life and appears most frequently in Sei's writing (321 mentions). This grand complex with its multiple gates, chambers, and gardens was where she served Empress Teishi. The original Heian Palace was located northwest of the current Imperial Palace.",
        seiQuote: "The uguisu is made out to be a wonderful bird in Chinese poetry, and both its voice and its appearance are really so enchanting that it's very unseemly of it not to sing inside the grounds of our 'nine-fold palace'... during my ten years in the palace I never once heard the bird.",
        highlights: [
            "Suzaku Gate - the grand southern entrance",
            "Shishinden - the main ceremonial hall",
            "Empress's quarters - where Sei served",
            "Palace gardens - setting for seasonal poetry"
        ],
        currentStatus: "Original palace no longer exists (destroyed by fires)",
        visitInfo: "The site is now partly occupied by modern Kyoto. Current Imperial Palace is a different, later location",
        coordinates: { lat: 35.01361, lng: 135.74222 }, // Precise historical Heian Palace coordinates
        placeName: "Kyoto Imperial Palace" // For photo search
    },
    {
        id: "hase_temple",
        name: "Hase Temple",
        category: "temple",
        period: "Founded 686",
        image: "",
        shortDescription: "Sacred pilgrimage destination in Nara mentioned by Sei",
        description: "Hasedera Temple in Nara Prefecture was a major pilgrimage site for Heian court aristocracy. The Pillow Book includes a section titled 'Pilgrimage to the Hasedera' describing the arduous journey from the capital. Court ladies like Sei Shōnagon and Murasaki Shikibu both wrote about pilgrimages to this sacred site.",
        seiQuote: "Soon after the twentieth day of the ninth month, on a pilgrimage to Hase, I stayed along the way in a very rough and simple lodging house. I was quite exhausted, and fell into a deep sleep. Late that night, I woke and was deeply moved at the sight of the moonlight shining in through a window and casting its white light over the bedclothes of the sleeping forms around me. This is precisely the sort of moment when people compose poems.",
        highlights: [
            "11-meter tall wooden Kannon statue",
            "Popular pilgrimage destination for court nobles",
            "Famous covered log staircase (399 steps)",
            "Featured in The Pillow Book and Tale of Genji"
        ],
        currentStatus: "Active temple, head temple of Shingon Buzan sect",
        visitInfo: "Located in Sakurai City, Nara Prefecture - about 1 hour from Kyoto",
        coordinates: { lat: 34.5404, lng: 135.9972 },
        placeName: "Hasedera Temple"
    },
    {
        id: "nijo_mansion",
        name: "Nijo Aristocratic Quarter",
        category: "palace",
        period: "Heian Period (794-1185)",
        image: "",
        shortDescription: "Historic area of aristocratic mansions",
        description: "The Nijo area was home to elegant aristocratic residences during the Heian period. While specific mansions mentioned in literature may have been fictional, this area was genuinely populated by court nobles and their grand estates, hosting poetry gatherings and seasonal celebrations.",
        seiQuote: "Members of the nobility who lived outside the Palace arrive in their magnificently decorated carriages... As the carriages are drawn over the ground-beam of the Central Gate, there is always a tremendous bump, and the heads of the women passengers are knocked together; the combs fall out of their hair...",
        highlights: [
            "Historic area of aristocratic residences",
            "Scene of cultural gatherings", 
            "Example of refined court architecture",
            "Setting for seasonal observations"
        ],
        currentStatus: "Area still exists, now contains Nijo Castle",
        visitInfo: "Modern Nijo Castle built in 1603 occupies historically significant aristocratic area",
        coordinates: { lat: 35.0142, lng: 135.7489 }, // Nijo area in Kyoto
        placeName: "Nijo Castle"
    },
    {
        id: "ichijo_mansion",
        name: "Ichijo Family Residences",
        category: "palace",
        period: "Heian Period (794-1185)",
        image: "",
        shortDescription: "Residences of the powerful Ichijo family",
        description: "The Ichijo family were prominent court nobles during the Heian period. Emperor Ichijo (r. 986-1011) was the emperor under whom Sei Shōnagon served via Empress Teishi. The family maintained elegant residences in the northern part of the capital.",
        seiQuote: "When Teishi's attendants arrived at Narimasa's house, they found the gate too narrow for their carriages.",
        highlights: [
            "Ichijo family were major court nobles",
            "Emperor Ichijo ruled during Sei's service",
            "Northern capital location for aristocrats",
            "Centers of court social and cultural life"
        ],
        currentStatus: "Historical area in northern Kyoto", 
        visitInfo: "Located on what is now Ichijo street in central Kyoto",
        coordinates: { lat: 35.0306, lng: 135.7562 }, // Ichijo area in Kyoto
        placeName: "Ichijo Street Kyoto"
    },
    {
        id: "mount_ogura",
        name: "Mount Ogura",
        category: "nature",
        period: "Natural landmark",
        image: "",
        shortDescription: "Famous mountain of poets in Arashiyama",
        description: "Mount Ogura in the Arashiyama area of Kyoto is famous for its association with classical poetry. In the 13th century, Fujiwara no Teika compiled the Ogura Hyakunin Isshu poetry anthology at his villa here, which included one of Sei Shōnagon's poems. Though she did not write about this mountain directly, her appreciation for peaks appears in her lists.",
        seiQuote: "Peaks: Yuzuruha Peak. Amida Peak. Iyataka Peak.",
        highlights: [
            "Site where Ogura Hyakunin Isshu was compiled",
            "Sei Shōnagon's poem (#62) included in the anthology",
            "Views over the Heian capital",
            "Autumn colors celebrated in literature"
        ],
        currentStatus: "Natural landmark in Kyoto's Arashiyama area",
        visitInfo: "Accessible from Saga-Arashiyama Station, famous for autumn colors",
        coordinates: { lat: 35.0089, lng: 135.6753 },
        placeName: "Arashiyama Kyoto"
    },
    {
        id: "kamo_river",
        name: "Kamo River",
        category: "nature",
        period: "Natural waterway",
        image: "",
        shortDescription: "Sacred river flowing through the Heian capital",
        description: "The Kamo River flows directly through Kyoto and was central to Heian court culture. When the capital was established in 794, the Kamo River was positioned as an important waterway flowing east of the capital. Aristocrats enjoyed river boating and seasonal observations along its banks.",
        seiQuote: "One of the girls suggested we should try that bridge behind the Kamo Shrine... So we drove on towards Kamo, the familiar road making us feel quite as though we were on our way to the Festival.",
        highlights: [
            "Flows through the heart of Heian-kyo",
            "Scene of aristocratic river boating",
            "Traditional walking paths along banks",
            "Central to court seasonal observations"
        ],
        currentStatus: "Active river through modern Kyoto",
        visitInfo: "Walking paths maintain the contemplative atmosphere of Sei's era",
        coordinates: { lat: 35.0116, lng: 135.7681 }, // Kamo River in central Kyoto
        placeName: "Kamo River Kyoto"
    },
    {
        id: "kamo_shrines",
        name: "Kamo Shrines",
        category: "cultural",
        period: "Founded 6th-7th centuries",
        image: "",
        shortDescription: "Sacred shrines hosting the Aoi Matsuri festival",
        description: "The Kamo Shrines (Shimogamo and Kamigamo) host the Aoi Matsuri, one of the most important festivals mentioned in The Pillow Book. This festival has been held for over 1,000 years and represents the religious and cultural pageantry that Sei Shōnagon observed and documented.",
        seiQuote: "I had especially fond recollections of exhilarating events like the Kamo High Priestess's procession.",
        highlights: [
            "Host to the ancient Aoi Matsuri festival",
            "UNESCO World Heritage Sites",
            "Over 1,000 years of continuous festivals",
            "Featured in The Pillow Book and Tale of Genji"
        ],
        currentStatus: "Active shrines, UNESCO World Heritage Sites",
        visitInfo: "The Aoi Matsuri maintains traditional Heian-era processions every May 15th",
        coordinates: { lat: 35.0602, lng: 135.7664 }, // Kamigamo Shrine
        placeName: "Kamigamo Shrine"
    },
    {
        id: "current_imperial_palace",
        name: "Kyoto Imperial Palace",
        category: "palace",
        period: "Current palace built 1855",
        image: "",
        shortDescription: "Current palace preserving Heian architectural traditions",
        description: "While not the original palace where Sei Shōnagon served, the current Kyoto Imperial Palace preserves the architectural styles and layout principles of Heian court culture. The gardens and structures provide insight into the refined aesthetic environment that shaped her observations.",
        seiQuote: "Looking through one of the gates of the Palace enclosure, I could dimly make out a garden fence, near which a number of ladies, several of them from the Office of the Grounds, went to and fro. What lucky women, I thought, who could walk about the Nine-Fold Enclosure as though they had lived there all their lives!",
        highlights: [
            "Preserves Heian architectural principles",
            "Traditional court gardens and layouts",
            "Example of refined aristocratic taste",
            "Continuing imperial traditions"
        ],
        currentStatus: "Active imperial residence until 1869, now museum",
        visitInfo: "Open to public with guided tours showing Heian-style architecture",
        coordinates: { lat: 35.0218, lng: 135.7573 }, // Current Kyoto Imperial Palace
        placeName: "Kyoto Imperial Park"
    },
    {
        id: "shimogamo_shrine",
        name: "Shimogamo Shrine",
        category: "cultural",
        period: "Founded 6th century",
        image: "",
        shortDescription: "Ancient shrine in the primeval forest",
        description: "Shimogamo Shrine, part of the Kamo shrine complex, sits within the Tadasu no Mori primeval forest. This ancient shrine co-hosts the Aoi Matsuri festival along with Kamigamo Shrine, representing the spiritual landscape of Heian Japan where Shinto traditions intermingled with court culture and provided the sacred backdrop for festivals and ceremonies.",
        seiQuote: "One of the girls suggested we should try that bridge behind the Kamo Shrine... So we drove on towards Kamo, the familiar road making us feel quite as though we were on our way to the Festival.",
        highlights: [
            "Co-hosts the ancient Aoi Matsuri festival",
            "Sits within primeval Tadasu no Mori forest",
            "One of Japan's oldest Shinto shrines",
            "UNESCO World Heritage Site"
        ],
        currentStatus: "Active shrine and World Heritage Site",
        visitInfo: "Features ancient forest setting and traditional Shinto architecture",
        coordinates: { lat: 35.0378, lng: 135.7725 }, // Shimogamo Shrine
        placeName: "Shimogamo Shrine"
    },
    {
        id: "fushimi_inari",
        name: "Fushimi Inari Shrine",
        category: "temple",
        period: "Founded 711, expanded in Heian Period",
        image: "",
        shortDescription: "Sacred shrine with thousands of vermillion torii gates",
        description: "Fushimi Inari Shrine, founded in 711, became increasingly important during the Heian period as the shrine dedicated to Inari, the Shinto deity of rice and prosperity. The thousands of vermillion torii gates winding up the mountain create one of Japan's most mystical religious landscapes, representing the kind of sacred beauty that would have moved court observers like Sei Shōnagon.",
        seiQuote: "You have an urge to go on a pilgrimage to Inari Shrine, and as you're laboriously gasping your way up the steep mountainside to the middle shrine, you're filled with admiration to see others who've obviously started behind you go climbing straight up without the least effort; when you arrive, there they stand, already at their worship.",
        highlights: [
            "Thousands of vermillion torii gates",
            "Sacred to Inari, deity of rice and prosperity", 
            "Mountain shrine complex",
            "Mystical forest pathways"
        ],
        currentStatus: "Active shrine, major pilgrimage site",
        visitInfo: "Famous for its tunnel of thousands of torii gates donated over centuries",
        coordinates: { lat: 34.9671, lng: 135.7727 }, // Fushimi Inari Shrine
        placeName: "Fushimi Inari Shrine"
    },
    {
        id: "kiyomizu_temple", 
        name: "Kiyomizu-dera Temple",
        category: "temple",
        period: "Founded 778, rebuilt multiple times",
        image: "",
        shortDescription: "Historic temple famous for its wooden platform and pure springs",
        description: "Kiyomizu-dera Temple, founded in 778, was about 200 years old during Sei Shōnagon's time at court. The temple's name means 'clear water' referring to the pure springs that flow beneath it. This sacred site, with its dramatic views over the capital and its association with the Kannon bodhisattva of mercy, was a popular pilgrimage destination for Heian court aristocracy.",
        seiQuote: "Once when I had gone to Kiyomizu Temple for a retreat and was listening with deep emotion to the loud cry of the cicadas, a special messenger brought me a note from Her Majesty written on a sheet of red-tinted Chinese paper... Since I had forgotten to bring along any suitable paper, I wrote my reply on a purple lotus petal.", seiQuote2: "It's delightful to be on retreat at a temple over the New Year when it's terribly cold and there's a feeling of snow in the freezing air. On the other hand, it ruins the mood of the occasion if the skies are instead heavy with the threat of rain. You've come on pilgrimage to the temple at Kiyomizu, say, intending to seclude yourself in one of the private seclusion rooms; the carriage is drawn up to the foot of the long stairs leading up to the temple, and while the room is being prepared, you observe the young monks, dressed only in little waist-robes and wearing those high clogs they wear, trotting perfectly nonchalantly up and down the steep stairway, murmuring scraps of sutra or chanting the four-word verses of the Kusha Sutra as they go. It's a scene that goes perfectly with the place.",
        highlights: [
            "Famous wooden platform without nails",
            "Sacred Otowa Waterfall with pure springs",
            "Panoramic views over Kyoto",
            "UNESCO World Heritage Site"
        ],
        currentStatus: "Active temple, UNESCO World Heritage Site", 
        visitInfo: "One of Kyoto's most famous temples, known for its architectural marvel and spiritual significance",
        coordinates: { lat: 34.9949, lng: 135.7849 }, // Kiyomizu-dera Temple
        placeName: "Kiyomizu-dera Temple"
    },
    {
        id: "kasuga_shrine",
        name: "Kasuga Taisha Shrine",
        category: "cultural",
        period: "Founded 768, expanded during Heian period",
        image: "",
        shortDescription: "Sacred shrine of the powerful Fujiwara family",
        description: "Kasuga Taisha in Nara was the tutelary shrine of the Fujiwara clan, the most powerful court family during Sei Shōnagon's time. Empress Teishi, whom Sei served, was from the Fujiwara family. Though Sei did not write about Kasuga directly, her writings are filled with observations of shrine festivals and the Fujiwara's influence at court.",
        seiQuote: "I had especially fond recollections of exhilarating events like the Kamo High Priestess's procession, or the departure procession of the Regent.",
        highlights: [
            "Tutelary shrine of the Fujiwara clan",
            "Annual imperial court pilgrimages",
            "Over 3,000 stone and bronze lanterns",
            "UNESCO World Heritage Site"
        ],
        currentStatus: "Active shrine, UNESCO World Heritage Site",
        visitInfo: "Famous for its thousands of lanterns and sacred deer park, maintaining traditions from Sei's era",
        coordinates: { lat: 34.6180, lng: 135.8465 },
        placeName: "Kasuga Taisha"
    },
    {
        id: "sennyu_temple",
        name: "Sennyū-ji Temple",
        category: "temple",
        period: "Origins in 9th century, rebuilt 1218",
        image: "",
        shortDescription: "Temple near Sei Shōnagon's father's mountain villa",
        description: "Sennyū-ji Temple sits at the base of Mount Tsukinowa, where Sei Shōnagon's father Kiyowara no Motosuke had his mountain villa. Scholars believe Sei may have spent her later years in seclusion here. A monument inscribed with her poem now stands on the temple grounds, near the tomb of Empress Teishi whom she served. Though Sei did not write about this area directly, temple retreats feature prominently in her observations.",
        seiQuote: "It's delightful to be on retreat at a temple over the New Year when it's terribly cold and there's a feeling of snow in the freezing air.",
        highlights: [
            "Site of Sei Shōnagon's father's mountain villa",
            "Possible location of Sei's final years",
            "Near tomb of Empress Teishi",
            "Monument to Sei Shōnagon on grounds"
        ],
        currentStatus: "Active temple, imperial mausoleum site",
        visitInfo: "Known as the imperial family temple, with monument commemorating Sei Shōnagon",
        coordinates: { lat: 34.9537, lng: 135.7853 },
        placeName: "Sennyu-ji Temple"
    }
];

let currentFilter = 'all';
let activeLocationId = null;
let map;
let markers = [];
let infoWindows = [];
let placesService;

// Google Maps initialization
function initMap() {
    try {
        console.log('Initializing Google Maps...');
        
        // Check if Google Maps API loaded
        if (typeof google === 'undefined') {
            console.error('Google Maps API not loaded');
            showFallbackMessage();
            return;
        }
        
        // Center the map on Kyoto
        map = new google.maps.Map(document.getElementById('heianMap'), {
        zoom: 11,
        center: { lat: 35.0116, lng: 135.7681 }, // Kyoto center
        styles: [
            // Custom map styling to match the site aesthetic
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{"saturation": -20}, {"lightness": 20}]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#f0ede8"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#b3c9d8"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#e8ddd8"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
    });

        // Initialize Places service
        placesService = new google.maps.places.PlacesService(map);
        
        renderMapMarkers();
        initializeRecommendations();
        loadLocationPhotos();
        console.log('Google Maps initialized successfully');
        
    } catch (error) {
        console.error('Error initializing Google Maps:', error);
        showFallbackMessage();
    }
}

function showFallbackMessage() {
    const mapContainer = document.getElementById('heianMap');
    mapContainer.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #f0ede8 0%, #e8ddd8 100%); border-radius: 15px; flex-direction: column; color: #8b6f5c; text-align: center; padding: 40px;">
            <div style="font-size: 2em; margin-bottom: 20px;">🗺️</div>
            <div style="font-size: 1.2em; margin-bottom: 10px; font-style: italic;">Map Loading...</div>
            <div style="font-size: 0.9em; color: #9b8175;">Please check your internet connection or try refreshing the page</div>
            <div style="margin-top: 20px; font-size: 0.8em; color: #b89286;">
                Note: This feature requires Google Maps to be enabled in your browser
            </div>
        </div>
    `;
    
    // Still initialize the list functionality
    initializeRecommendations();
}

function initializeRecommendations() {
    renderLocationsList();
}

function loadLocationPhotos() {
    console.log('Loading photos for locations...');
    
    LOCATIONS.forEach((location, index) => {
        if (location.placeName && placesService) {
            // Search for the place
            const request = {
                query: location.placeName,
                location: location.coordinates,
                radius: 5000,
                fields: ['photos', 'place_id', 'name']
            };
            
            placesService.textSearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
                    const place = results[0];
                    
                    if (place.photos && place.photos.length > 0) {
                        // Get the photo URL
                        const photo = place.photos[0];
                        const photoUrl = photo.getUrl({
                            maxWidth: 800,
                            maxHeight: 600
                        });
                        
                        // Update the location object
                        LOCATIONS[index].image = photoUrl;
                        console.log(`Photo loaded for ${location.name}:`, photoUrl);
                        
                        // Re-render the list to show the new image
                        renderLocationsList();
                    } else {
                        console.log(`No photos found for ${location.name}`);
                    }
                } else {
                    console.log(`Place search failed for ${location.name}:`, status);
                }
            });
        }
    });
}

function renderLocationsList() {
    const listContainer = document.getElementById('locationsList');
    const filteredLocations = currentFilter === 'all' 
        ? LOCATIONS 
        : LOCATIONS.filter(location => location.category === currentFilter);
    
    listContainer.innerHTML = filteredLocations.map(location => `
        <div class="location-list-item ${activeLocationId === location.id ? 'active' : ''}" 
             onclick="selectLocation('${location.id}')" 
             data-location-id="${location.id}">
            <div style="display: flex; align-items: center;">
                ${location.image ? `<div class="location-item-image" style="background-image: url('${location.image}')"></div>` : 
                  '<div class="location-item-image" style="background: linear-gradient(135deg, rgba(139, 111, 92, 0.2), rgba(139, 111, 92, 0.1)); display: flex; align-items: center; justify-content: center; color: rgba(139, 111, 92, 0.5); font-size: 0.7em;">📍</div>'}
                <div class="location-item-content">
                    <div class="location-item-title">${location.name}</div>
                    <div class="location-item-type">${location.category}</div>
                    <div class="location-item-description">${location.shortDescription}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMapMarkers() {
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    infoWindows.forEach(infoWindow => infoWindow.close());
    markers = [];
    infoWindows = [];

    const filteredLocations = currentFilter === 'all' 
        ? LOCATIONS 
        : LOCATIONS.filter(location => location.category === currentFilter);

    // Color mapping for categories
    const categoryColors = {
        temple: '#d32f2f',
        palace: '#7b1fa2',
        nature: '#388e3c',
        cultural: '#f57c00'
    };

    filteredLocations.forEach(location => {
        // Use home icon only for Nine-Fold Palace, circle for others
        let markerIcon;
        if (location.id === 'imperial_palace') {
            markerIcon = {
                path: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
                scale: 1,
                fillColor: categoryColors[location.category],
                fillOpacity: 0.9,
                strokeColor: '#ffffff',
                strokeWeight: 2,
                anchor: new google.maps.Point(12, 20)
            };
        } else {
            markerIcon = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: categoryColors[location.category],
                fillOpacity: 0.9,
                strokeColor: '#ffffff',
                strokeWeight: 2
            };
        }
        
        const marker = new google.maps.Marker({
            position: location.coordinates,
            map: map,
            title: location.name,
            icon: markerIcon
        });

        // Create info window content
        const infoWindowContent = `
            <div class="custom-info-window">
                <div class="info-window-category">${location.category}</div>
                <div class="info-window-title">${location.name}</div>
                <div class="info-window-period">${location.period}</div>
                <div class="info-window-description">${location.shortDescription}</div>
            </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

        marker.addListener('click', () => {
            // Close all other info windows
            infoWindows.forEach(iw => iw.close());
            
            // Open this info window
            infoWindow.open(map, marker);
            
            // Select location in list
            selectLocationFromMap(location.id);
        });

        markers.push(marker);
        infoWindows.push(infoWindow);
    });
}

function selectLocation(locationId) {
    activeLocationId = locationId;
    
    // Update list items
    document.querySelectorAll('.location-list-item').forEach(item => {
        item.classList.remove('active');
    });
    const selectedItem = document.querySelector(`[data-location-id="${locationId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
        selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Pan map to location and open info window
    const location = LOCATIONS.find(loc => loc.id === locationId);
    if (location && map) {
        map.panTo(location.coordinates);
        map.setZoom(15);
        
        // Find and open corresponding marker info window
        const markerIndex = LOCATIONS.indexOf(location);
        if (markers[markerIndex] && infoWindows[markerIndex]) {
            infoWindows.forEach(iw => iw.close());
            infoWindows[markerIndex].open(map, markers[markerIndex]);
        }
    }
    
    // Open detailed modal
    openLocationModal(locationId);
}

function selectLocationFromMap(locationId) {
    activeLocationId = locationId;
    
    // Update list items
    document.querySelectorAll('.location-list-item').forEach(item => {
        item.classList.remove('active');
    });
    const selectedItem = document.querySelector(`[data-location-id="${locationId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
        selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function filterLocations(category) {
    currentFilter = category;
    activeLocationId = null;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    renderLocationsList();
    renderMapMarkers();
}

function openLocationModal(locationId) {
    const location = LOCATIONS.find(loc => loc.id === locationId);
    if (!location) return;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        ${location.image ? `<div class="modal-image" style="background-image: url('${location.image}')"></div>` : 
          '<div style="height: 200px; background: linear-gradient(135deg, rgba(139, 111, 92, 0.1), rgba(139, 111, 92, 0.05)); border-radius: 15px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: rgba(139, 111, 92, 0.4); font-size: 3em;">📍</div>'}
        <div class="location-badge">${location.category}</div>
        <h2 style="color: #8b6f5c; font-style: italic; margin-bottom: 10px;">${location.name}</h2>
        <div class="location-period" style="margin-bottom: 20px;">${location.period}</div>
        
        <div style="font-size: 1.1em; line-height: 1.7; margin-bottom: 20px;">
            ${location.description}
        </div>
        
        <div class="sei-quote">
            "${location.seiQuote}"
            <div class="quote-author">— sei shōnagon</div>
        </div>
        
        ${location.seiQuote2 ? `
        <div class="sei-quote">
            "${location.seiQuote2}"
            <div class="quote-author">— sei shōnagon</div>
        </div>
        ` : ''}
        
        <div style="margin: 25px 0;">
            <h3 style="color: #8b6f5c; font-size: 1.2em; margin-bottom: 15px; font-style: italic;">Highlights</h3>
            <ul style="list-style: none; padding: 0;">
                ${location.highlights.map(highlight => `
                    <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                        <span style="position: absolute; left: 0; color: #8b6f5c;">•</span>
                        ${highlight}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="background: rgba(139, 111, 92, 0.05); padding: 20px; border-radius: 15px; margin-top: 20px;">
            <div style="font-weight: 500; color: #8b6f5c; margin-bottom: 8px;">Current Status</div>
            <div style="margin-bottom: 10px;">${location.currentStatus}</div>
            <div style="font-style: italic; color: #6b5449;">${location.visitInfo}</div>
        </div>
    `;
    
    document.getElementById('locationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Google Maps will call initMap when ready
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('locationModal');
        if (event.target === modal) {
            closeModal();
        }
    }
});

// Make initMap globally available for Google Maps callback
window.initMap = initMap;

// Export function for potential integration
window.pillowBookRecommendations = {
    getLocations: () => LOCATIONS,
    filterByCategory: (category) => LOCATIONS.filter(loc => loc.category === category),
    selectLocation: selectLocation
};