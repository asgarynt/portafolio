import DesktopNavBar from './desktopNavBar';
import MobileNavBar from './mobileNavBar';
import "./navbar.css"

export default function ResponsiveAppBar() {
    return (
      <div>
        <MobileNavBar />
        <DesktopNavBar />
      </div>
    );
}