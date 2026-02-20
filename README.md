# Cloudscape Select Locale Bug Reproduction

## Issue
Cloudscape Select component filtering doesn't work correctly with accented characters.

## Repro Steps
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open the Select dropdown
4. Type "México" - filtering works correctly
5. Type "Mexico" - filtering doesn't work (no results shown)

## Expected Behavior
Both "Mexico" and "México" should filter and display the México option.

## Actual Behavior
- "México" = works ✓
- "Mexico" = doesn't work ✗
