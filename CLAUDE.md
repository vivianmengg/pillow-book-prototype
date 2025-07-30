# Pillow Book Project - Development Notes

## Museum API Usage

### ✅ Metropolitan Museum of Art API
**ALWAYS use the Met API instead of guessing image URLs**

- **API Base URL**: `https://collectionapi.metmuseum.org/public/collection/v1/objects/[OBJECT_ID]`
- **How to get Object ID**: From Met URLs like `metmuseum.org/art/collection/search/36630` → Object ID is `36630`
- **Primary Image Field**: `primaryImage` field in JSON response
- **Example**: 
  - URL: `https://collectionapi.metmuseum.org/public/collection/v1/objects/36630`
  - Returns: `"primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP144584.jpg"`

### Why This Matters
- **Reliable**: Direct from Met's database
- **Current**: Always up-to-date URLs
- **No Guessing**: No more trying random DP numbers
- **Faster**: Skip WebSearch for image URLs

### ✅ National Palace Museum Taipei API (Dream of Red Chamber Project)
**TOP PRIORITY for Chinese artifacts**

- **API Base URL**: `https://digitalarchive.npm.gov.tw/opendata`
- **Collection Size**: 410,000+ digitized items
- **Strengths**: 12,327 jade objects, 24,166 porcelain pieces, 1,626 textiles
- **Licensing**: CC0 (low-res) and CC BY 4.0 (mid-res)
- **Perfect for**: Qing Dynasty artifacts matching Dream of Red Chamber passages

### ✅ Harvard Art Museums API
**Good secondary source for Chinese art**

- **API Base URL**: `https://api.harvardartmuseums.org/object`
- **Requires**: Free API key registration
- **Daily Limit**: 2,500 calls
- **Strengths**: Grenville Winthrop Chinese collection, IIIF compatible
- **Documentation**: https://github.com/harvardartmuseums/api-docs

### Other Museum APIs to Investigate
- British Museum: Blocks requests, avoid
- Cleveland Museum: Check if API available

## Project Structure

### Pillow Book (Japanese Aesthetic)
- **Main File**: `index.html` (artistic beige/brown theme)
- **Backup**: `index-basic.html` (simple purple version)  
- **Data**: `pillow-book-new.js` (Heian period artifacts)
- **Old**: `pillow-book.js` (legacy, can delete)

### Dream of Red Chamber (Chinese Aesthetic) - Ready to Implement
- **Planned File**: `dream-red-chamber.html` (Chinese imperial theme)
- **Data**: `dream-red-chamber.js` (Qing dynasty artifacts)
- **Analysis**: `dream_red_chamber_material_culture_analysis.md` ✅ Complete
- **Roadmap**: `DREAM_RED_CHAMBER_NEXT_STEPS.md` ✅ Complete

## Performance Notes
- **Fast highlighting**: Pre-compute DOM lookups, avoid Array.find() in hover events
- **Image loading**: Always test image URLs before committing
- **Transitions**: Keep under 0.2s for snappy feel

## Design Principles
- **Cozy aesthetic**: Beige/brown color palette inspired by chloeyan.me
- **Poetic connections**: Artifacts should visually show what Sei Shōnagon describes
- **Authentic materials**: Prefer contemporary Heian objects when possible