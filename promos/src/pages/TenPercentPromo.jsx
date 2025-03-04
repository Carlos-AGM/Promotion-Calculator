import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/tenPercentPromo.css"; 
import { Minus, Plus } from "lucide-react"; 

const machines = [
    { name: "Lavadora Chica", price: 25 },
    { name: "Lavadora Mediana", price: 30 },
    { name: "Lavadora Super", price: 48 },
    { name: "Lavadora Mini Jr", price: 52 },
    { name: "Lavadora Junior", price: 58 },
    { name: "Lavadora Jumbo", price: 62 },
    { name: "Secadora Chica", price: 25 },
    { name: "Secadora Jumbo", price: 50 }
];

export function TenPercentPromo() {
    const navigate = useNavigate();
    const [quantities, setQuantities] = useState(
        machines.map(() => 0) // Inicializa en 0 todas las cantidades
    );

    // Función para aumentar o disminuir la cantidad de cada máquina
    const updateQuantity = (index, delta) => {
        setQuantities(prev => 
            prev.map((q, i) => (i === index ? Math.max(0, q + delta) : q))
        );
    };

    const totalBeforeDiscount = quantities.reduce(
        (acc, qty, index) => acc + qty * machines[index].price, 0
    );
    const discount = totalBeforeDiscount * 0.1;
    const totalWithDiscount = totalBeforeDiscount - discount;

    return (
        <div className="ten-container">
            <button className="fifteen-home-button" onClick={() => navigate("/")}>
                Lavandería Gaza Promociones
            </button>
            <h1 className="ten-title">Promoción 10% de Descuento</h1>
            <div className="ten-machine-list">
                {machines.map((machine, index) => (
                    <div key={index} className="ten-machine-card">
                        <span className="ten-machine-name">{machine.name} - ${machine.price}</span>
                        <div className="ten-counter">
                            <button 
                                className="ten-btn ten-minus" 
                                onClick={() => updateQuantity(index, -1)}
                            >
                                <Minus size={16} />
                            </button>
                            <span className="ten-quantity">{quantities[index]}</span>
                            <button 
                                className="ten-btn ten-plus" 
                                onClick={() => updateQuantity(index, 1)}
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="ten-total">
                <p>Total antes del descuento: <strong>${totalBeforeDiscount}</strong></p>
                <p>Descuento (10%): <strong>-${discount.toFixed(2)}</strong></p>
                <p>Total a pagar: <strong>${Math.round(totalWithDiscount)}</strong></p>
            </div>
        </div>
    );
}

export default TenPercentPromo;