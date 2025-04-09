import { Saga } from "../types/saga";
import "./SideMenu.css";

interface SideMenuProps {
  sagas: Saga[];
  activeSagaId: string;
  onSagaClick: (sagaId: string) => void;
}

export function SideMenu({ sagas, activeSagaId, onSagaClick }: SideMenuProps) {
  return (
    <nav className="side-menu">
      <div className="menu-items">
        {sagas.map((saga) => (
          <button
            key={saga.id}
            className={`menu-item ${saga.id === activeSagaId ? "active" : ""}`}
            onClick={() => onSagaClick(saga.id)}
          >
            {saga.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
