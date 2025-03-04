import { useNavigate } from "react-router-dom";
import "../css/promoSelection.css";

export function PromoSelection() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
            <h1 className="title">Selecciona tu promoción</h1>
            <div className="button-container">
                <button onClick={() => navigate('/laundry/ten-percent-promo/')} className="btn btn-blue">
                    10% de descuento en maquinas
                </button>
                <button onClick={() => navigate('/laundry/fifteen-percent-promo/')} className="btn btn-green">
                    15% de descuento en maquinas
                </button>
                <button onClick={() => navigate('/laundry/forty-percent-promo/')} className="btn btn-red">
                    40% de descuento en secadora
                </button>
            </div>
        </div>
        </>
    )
}

export default PromoSelection