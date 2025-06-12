# PodOfCast

PodOfCast is a modern podcast aggregator and player built with Vue 3 and Vite. It allows users to subscribe to RSS podcast feeds, browse and search episodes, and play audio directly in the browser.

## Features

- **Subscribe to RSS Feeds**: Add any podcast RSS feed URL to fetch and display its episodes.
- **Episode List**: View a list of episodes with title, publication date, and description.
- **Search and Filter**: Search episodes by title or description.
- **Responsive Design**: Works on desktop, tablet, and mobile devices.
- **Offline Caching** _(optional)_: Cache episode metadata for offline access (if configured).

## Tech Stack

- **Framework**: Vue 3 with the Composition API
- **Bundler**: Vite
- **Testing**: Vitest
- **Linting**: ESLint + Prettier
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js v14+ and npm or yarn installed

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YangBang74/PodOfCast.git
   cd PodOfCast
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server with hot-reload:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Production Build

Generate a production-ready build:

```bash
npm run build
# or
yarn build
```

Output files are in the `dist` directory.

### Testing

Run unit tests with Vitest:

```bash
npm run test:unit
# or
yarn test:unit
```

### Linting

Check code style and fix issues:

```bash
npm run lint
# or
yarn lint
```

## Configuration

- **RSS Feed URL**: By default, you can add and remove feed URLs via the UI. You can also pre-configure feeds in `src/config/feeds.js`.
- **Player Settings**: Customize default volume or playback speed in `src/config/player.js`.

## Project Structure

```text
PodOfCast/
├── .vscode/            # VS Code workspace settings
├── public/             # Static assets (favicon, index.html)
├── src/                # Source code
│   ├── assets/         # Images, icons, styles
│   ├── components/     # Vue components
│   ├── router/         # Vue Router setup
│   ├── views/          # Page-level components
│   ├── App.vue         # Root component
│   └── main.js         # Application entry point
├── .gitattributes      # Git attributes
├── .gitignore          # Ignored files
├── index.html          # HTML template
├── jsconfig.json       # JS path alias config
├── package.json        # Project metadata and scripts
├── package-lock.json   # NPM lockfile
├── vite.config.js      # Vite configuration
└── vitest.config.js    # Vitest configuration
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "feat: add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please make sure to update tests and documentation where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

_PodOfCast_ © 2025 Yang Bang. Built with ❤️ using Vue 3 and Vite.
