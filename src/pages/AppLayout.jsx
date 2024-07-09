import Map from "../components/Map";
import Siedbar from "../components/Siedbar";
import User from "../components/User";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Siedbar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
