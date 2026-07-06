import { primaryNavigation } from "../data";
import NavigationItem from "./NavigationItem";

export default function PrimaryNavigation() {
  return (
    <nav className="space-y-0.5">
      {primaryNavigation.map((item) => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </nav>
  );
}
