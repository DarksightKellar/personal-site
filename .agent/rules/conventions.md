---
trigger: always_on
---

### Separation of Concerns
- Frontend handles UI and routing
- Backend handles data and business logic
- Modules are standalone apps (not embedded in main app)

### Module Architecture (for modular projects)
- Modules live in their own directories
- Modules can be developed independently
- Main app loads modules dynamically (iframe, lazy loading, etc.)
- Never put module-specific code in main app's source

### Test Commands
```bash
# Frontend (typically)
npm test
npm run lint

# Backend (typically)
pytest -v
```