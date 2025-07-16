## ⚙️ Tech Used

- React
- Vite
- Sass
- React Router
- Chart.js
- Firebase
- Create React App

## 🛠️ Getting Started

Make sure you have the following installed:
```
Node.js >= 16
```
Install once the repository is cloned locally:
```
npm install
```
Run locally:
```
npm run start
```
The app will be available at: [http://localhost:3000/](http://localhost:3000/)

## 📁 Folder Structure

```
src/
├── Components/
│   ├── Bio.js              # Displays user bio information fetched from GitHub API
│   ├── Error.js            # Shows error messages when API calls or app actions fail
│   ├── LandingPage.js      # Main landing UI where users input GitHub usernames to search
│   ├── LoadingAnimation.js # Animated spinner or loading indicator shown during data fetch
│   └── RepoCards.js        # Lists GitHub repositories as cards with relevant details
├── App.js                  # Root React component; manages app state and renders main UI
├── firebase.js             # Firebase configuration and initialization (auth, database, etc.)
├── index.scss              # Global stylesheet containing all CSS for the app
```
