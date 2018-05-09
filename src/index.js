import dva from 'dva';
import './utils/css/normalize.css';
import './utils/css/flex.css';
import './utils/css/common.css';
import './index.scss';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/main').default);
app.model(require('./models/posts').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
