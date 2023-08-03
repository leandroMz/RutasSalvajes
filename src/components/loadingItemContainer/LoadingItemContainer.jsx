import './LoadingItemContainer.css';

export const LoadingItemContainer = ({ skeletonCount }) => {
    const renderSkeletons = () => {
        const skeletons = [];
        for (let i = 0; i < skeletonCount; i++) {
            skeletons.push(
                <div key={i} className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div className="loading-image">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                 
                                <button className="btn btn-warning" type="submit">Ver mas</button>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return skeletons;
    };

    return <div className="orderItems">{renderSkeletons()}</div>;
};