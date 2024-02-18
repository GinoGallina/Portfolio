import { base } from '../../consts/consts'

export const ImageDevices = () => {
    return (
        <div className="my-3">
            <img
                className="row w-75 mx-auto"
                src={`${base}assets/images/hero-devices.svg`}
                alt="pcs"
            />
        </div>
    )
}
