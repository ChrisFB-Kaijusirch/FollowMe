# FollowMe
Scribe-like guides

# 📝 Local Scribe

> Privacy-first workflow recorder for web and desktop – all operations run fully offline.

## Features

- ✅ Record web (via extension) and desktop (via local agent) workflows  
- ✅ Annotate, edit, reorder, or delete steps  
- ✅ Preview a visual timeline and export interactive or printable PDFs  
- ✅ No data sent to any servers — all user data remains local  
- ✅ Runs offline (PWA) or desktop agent via Electron

## Architecture

<details>
<summary>Click to view diagram</summary>

```mermaid
graph TD
  FE[Frontend (React + TS)]
  EXT[Browser Extension (captures clicks/input)]
  DA[Desktop Agent (Electron)]
  LS[Local Storage / Filesystem]

  EXT --> FE
  DA --> FE
  FE --> LS
