import { Saga } from '../types/saga';
import './InfoPanel.css';

interface InfoPanelProps {
  sagas: Saga[];
  activeSagaId: string;
  showInfo: boolean;
  onToggleInfo: () => void;
}

export function InfoPanel({ sagas, activeSagaId, showInfo, onToggleInfo }: InfoPanelProps) {
  return (
    <>
      <button
        className={`toggle-info ${showInfo ? "panel-open" : "panel-closed"}`}
        onClick={onToggleInfo}
        aria-label={showInfo ? "Hide Information" : "Show Information"}
      >
        {showInfo ? "❯" : "❮"}
      </button>

      <div className={`info-panel ${!showInfo ? "hidden" : ""}`}>
        <div className="info-content">
          <div className="info-section">
            <h3>Informations</h3>
            <p>{sagas.find((saga) => saga.id === activeSagaId)?.information}</p>
          </div>
        </div>
      </div>
    </>
  );
}