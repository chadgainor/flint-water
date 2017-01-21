import { TabsPage } from './tabs/tabs';
import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { TimelinePage } from './timeline/timeline';
import { MapPage } from './map/map';
import { CardsPage } from './cards/cards';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TabsPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = MapPage;
export const Tab2Root = CardsPage;
export const Tab3Root = TimelinePage;
export const Tab4Root = TimelinePage;
