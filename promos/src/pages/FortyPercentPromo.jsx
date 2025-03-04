import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/fortyPercentPromo.css";
import { Minus, Plus } from "lucide-react";

const machines = [
    { name: "Secadora Chica", price: 25 },
    { name: "Secadora Jumbo", price: 50 },
];

export function FortyPercentPromo() {
    const [counts, setCounts] = useState(Array(machines.length).fill(0));
    const navigate = useNavigate();

    const handleIncrement = (index) => {
        setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] += 1;
            return newCounts;
        });
    };

    const handleDecrement = (index) => {
        setCounts((prev) => {
            const newCounts = [...prev];
            if (newCounts[index] > 0) {
                newCounts[index] -= 1;
            }
            return newCounts;
        });
    };

    const total = counts.reduce((sum, count, index) => sum + count * machines[index].price, 0);
    const discount = total * 0.4;

    return (
        <div className="forty-container">
            <button className="forty-home-button" onClick={() => navigate("/")}>
                Lavandería Gaza Promociones
            </button>
            <h1 className="forty-title">Promoción 40% de Descuento (Secadora)</h1>
            <div className="forty-machine-list">
                {machines.map((machine, index) => (
                    <div key={index} className="forty-machine-card">
                        <span className="forty-machine-name">{machine.name} - ${machine.price}</span>
                        <div className="forty-counter">
                            <button className="forty-btn forty-minus" onClick={() => handleDecrement(index)}>
                                <Minus size={16} />
                            </button>
                            <span className="forty-quantity">{counts[index]}</span>
                            <button className="forty-btn forty-plus" onClick={() => handleIncrement(index)}>
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="forty-total">
                <p>Total antes del descuento: ${total.toFixed(2)}</p>
                <p>Descuento (40%): -${discount.toFixed(2)}</p>
                <p>Total a pagar: ${Math.round(total - discount)}</p>
            </div>
        </div>
    );
}

export default FortyPercentPromo;