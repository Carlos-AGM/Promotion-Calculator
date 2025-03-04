import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import "../css/fifteenPercentPromo.css";

const machines = [
    { name: "Lavadora Chica", price: 25 },
    { name: "Lavadora Mediana", price: 30 },
    { name: "Lavadora Super", price: 48 },
    { name: "Lavadora Mini Jr", price: 52 },
    { name: "Lavadora Junior", price: 58 },
    { name: "Lavadora Jumbo", price: 62 },
    { name: "Secadora Chica", price: 25 },
    { name: "Secadora Jumbo", price: 50 },
];

export function FifteenPercentPromo() {
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
    const discount = total * 0.15;

    return (
        <div className="fifteen-container">
            <button className="fifteen-home-button" onClick={() => navigate("/")}>
                Lavandería Gaza Promociones
            </button>
            <h1 className="fifteen-title">Promoción 15% de Descuento (Autoservicio)</h1>
            <div className="fifteen-machine-list">
                {machines.map((machine, index) => (
                    <div key={index} className="fifteen-machine-card">
                        <span className="fifteen-machine-name">{machine.name} - ${machine.price}</span>
                        <div className="fifteen-counter">
                            <button className="fifteen-btn fifteen-minus" onClick={() => handleDecrement(index)}>
                                <Minus size={16} />
                            </button>
                            <span className="fifteen-quantity">{counts[index]}</span>
                            <button className="fifteen-btn fifteen-plus" onClick={() => handleIncrement(index)}>
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fifteen-total">
                <p>Total antes del descuento: ${total.toFixed(2)}</p>
                <p>Descuento (15%): -${discount.toFixed(2)}</p>
                <p>Total a pagar: ${Math.round(total - discount)}</p>
            </div>
        </div>
    );
}

export default FifteenPercentPromo;