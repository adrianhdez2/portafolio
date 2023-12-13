function Card({item}) {
    return (
        <div className="project">
            <div className="img_project">
                <img src={item.img} alt="" />
            </div>
            <div className="text_project">
                <div className="desc_project_item">
                    <h4 className="title_project">{item.nombre}</h4>
                    <p className="desc_project">{item.description}</p>
                </div>
                <div className="button_project">
                    <a href={item.url} target="_blank" className="button">Ver proyecto</a>
                </div>
            </div>
        </div>
    );
}

export default Card;