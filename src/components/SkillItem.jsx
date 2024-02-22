export const SkillItem = ({ skill }) => {
    return (
        <div className="col mb-3">
            <div className="card p-2 h-100 shadow skill-card">
                <img
                    className="card-img-top"
                    src={skill.imageUrl}
                    alt={skill.nombre}
                />
                <div className="card-body">
                    <p className="text-center card-title mb-0 fw-bold">
                        {skill.nombre}
                    </p>
                </div>
            </div>
        </div>
    )
}
