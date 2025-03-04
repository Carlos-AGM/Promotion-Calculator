import { useNavigate } from "react-router-dom";
import "../css/promoSelection.css";

export function PromoSelection() {
    const navigate = useNavigate();

    return (
        <>
            <div className="promo-container">
            <h1 className="promo-title">Seleccione la promoción</h1>
            <div className="promo-button-container">
                <button onClick={() => navigate('/laundry/ten-percent-promo/')} className="promo-btn promo-btn-blue">
                    10% de descuento en maquinas
                </button>
                <button onClick={() => navigate('/laundry/fifteen-percent-promo/')} className="promo-btn promo-btn-green">
                    15% de descuento en maquinas
                </button>
                <button onClick={() => navigate('/laundry/forty-percent-promo/')} className="promo-btn promo-btn-red">
                    40% de descuento en secadora
                </button>
            </div>
        </div>
        </>
    )
}

export default PromoSelection