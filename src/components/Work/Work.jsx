import Slider from 'react-slick';
import './Work.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Work() {
  // Slider settings

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <>
      <div id="Work" className="work">
        <div className="work-content">
          {' '}
          <h2 className="work-title text-center fw-bold text-uppercase">
            Mes projets
          </h2>
        </div>
      </div>
      <div className="gallery">
        <Slider {...settings}>
          <div className="gallery-item">
            <img
              src="../assets/aar_project.png"
              alt="e-commerce website about reborns"
              width={466}
              height={491}
            />
            <div className="carousel-info text-center">
              <h3 className="carousel-title fw-semibold">Adopt a Reborn</h3>
              <p className="carousel-text">
                Conception d'une application web qui propose la vente et la
                revente de reborns.
              </p>
            </div>
            <div className="tools">
              <div className="tools-dev">
                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 128 128"
                  >
                    <g fill="#1d1d1f">
                      <circle cx={64} cy={64} r={11.4}></circle>
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path>
                    </g>
                  </svg>
                  <p className="tools-subtitle">React</p>
                </div>

                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <g clipPath="url(#akarIconsJavascriptFill0)">
                        <path
                          fill="#1d1d1f"
                          fillRule="evenodd"
                          d="M0 0h24v24H0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113m-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416"
                          clipRule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="akarIconsJavascriptFill0">
                          <path fill="#1d1d1f" d="M0 0h24v24H0z"></path>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                  <p className="tools-subtitle">JavaScript</p>
                </div>

                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1d1d1f"
                      d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47q.36.21.78.21t.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8"
                    ></path>
                  </svg>
                  <p className="tools-subtitle">Node.js</p>
                </div>

                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1d1d1f"
                      d="M16.805 1a9.85 9.85 0 0 0-2.603.37l-.06.018a10.629 10.629 0 0 0-1.615-.151c-1.113-.019-2.07.243-2.84.68c-.76-.256-2.336-.697-3.997-.609c-1.157.061-2.419.402-3.354 1.36c-.933.958-1.426 2.44-1.322 4.457c.028.557.191 1.464.463 2.64c.27 1.175.652 2.55 1.127 3.805c.475 1.256.996 2.384 1.81 3.15c.406.384.965.707 1.624.68c.463-.018.882-.215 1.243-.506c.176.225.364.323.535.414c.215.114.425.192.642.244a4.61 4.61 0 0 0 1.84.091c.267-.043.548-.127.828-.247c.01.302.022.598.035.898c.038.95.063 1.827.357 2.596c.047.126.176.773.687 1.344c.51.572 1.51.928 2.648.692c.803-.167 1.825-.468 2.503-1.404c.67-.926.973-2.254 1.033-4.409c.015-.116.033-.215.052-.308l.16.014h.018c.857.038 1.787-.08 2.564-.43c.688-.31 1.208-.622 1.587-1.177c.095-.137.199-.303.227-.59c.028-.285-.14-.733-.421-.939c-.563-.414-.916-.257-1.295-.18c-.373.08-.753.124-1.136.133c1.093-1.784 1.876-3.68 2.323-5.358c.264-.99.413-1.903.425-2.701c.012-.798-.055-1.505-.548-2.117c-1.541-1.91-3.708-2.438-5.384-2.456c-.052-.001-.104-.002-.156-.001zm-.044.587c1.585-.015 3.611.417 5.065 2.22c.327.405.424.997.413 1.727c-.012.729-.151 1.601-.405 2.557c-.493 1.852-1.425 4.01-2.738 5.948a.724.724 0 0 0 .15.079c.274.11.898.204 2.145-.044c.313-.065.543-.108.781.068a.478.478 0 0 1 .173.39a.635.635 0 0 1-.123.308c-.24.351-.716.684-1.326.958c-.539.244-1.313.371-1.999.379c-.344.003-.661-.023-.93-.104l-.018-.006c-.104.971-.343 2.89-.498 3.765c-.125.706-.343 1.267-.76 1.687c-.416.42-1.004.673-1.796.838c-.981.204-1.696-.016-2.157-.393c-.46-.375-.671-.874-.798-1.18c-.087-.21-.132-.483-.176-.848a18.073 18.073 0 0 1-.097-1.315a45.725 45.725 0 0 1-.028-2.312c-.41.363-.92.605-1.467.696c-.65.107-1.232.002-1.579-.082a2.19 2.19 0 0 1-.49-.185c-.162-.083-.315-.177-.417-.363a.5.5 0 0 1-.054-.35a.559.559 0 0 1 .206-.303c.188-.148.435-.23.808-.306c.68-.135.917-.228 1.061-.339c.123-.095.262-.287.508-.57a1.166 1.166 0 0 1-.003-.037a2.864 2.864 0 0 1-1.257-.328c-.141.144-.865.887-1.748 1.917c-.371.431-.781.678-1.214.696c-.433.018-.824-.194-1.156-.506c-.665-.626-1.195-1.703-1.657-2.92c-.46-1.218-.836-2.574-1.102-3.729c-.268-1.155-.426-2.086-.448-2.535c-.1-1.909.36-3.195 1.15-4.006c.79-.811 1.872-1.118 2.928-1.177c1.894-.106 3.693.535 4.057.673c.701-.462 1.604-.75 2.733-.732a7.185 7.185 0 0 1 1.588.2l.019-.008c.229-.078.462-.144.698-.196a9.362 9.362 0 0 1 1.957-.23zm.143.614h-.137a8.502 8.502 0 0 0-1.61.176a7.048 7.048 0 0 1 2.692 2.062a7.72 7.72 0 0 1 1.07 1.76c.104.242.174.447.213.605c.02.08.034.147.038.217a.392.392 0 0 1-.011.132l-.006.012c.029.803-.176 1.347-.201 2.113c-.019.556.127 1.209.163 1.92c.034.67-.049 1.405-.497 2.127c.038.044.072.088.108.132c1.185-1.81 2.04-3.814 2.495-5.521c.243-.92.373-1.753.384-2.413c.01-.66-.117-1.139-.279-1.338c-1.268-1.573-2.983-1.974-4.422-1.985zm-4.525.235c-1.117.002-1.919.33-2.526.82c-.627.507-1.047 1.2-1.323 1.911a7.898 7.898 0 0 0-.485 2.213l.013-.007c.337-.184.78-.367 1.254-.473c.475-.106.986-.139 1.449.035c.463.175.846.584.985 1.206c.665 2.986-.207 4.096-.529 4.933a8.628 8.628 0 0 0-.312.929c.04-.01.08-.02.121-.024a1.06 1.06 0 0 1 .51.1c.324.13.546.402.666.714c.031.082.054.17.067.26c.014.038.02.077.019.117a49.059 49.059 0 0 0 .012 3.426c.022.494.054.928.095 1.271c.04.342.098.602.135.69c.12.294.297.678.617.939c.32.26.777.434 1.614.26c.726-.151 1.174-.36 1.474-.663c.298-.301.477-.72.591-1.363c.171-.963.515-3.754.556-4.28c-.018-.395.042-.7.172-.932c.135-.238.343-.384.522-.463c.09-.04.174-.066.243-.085a5.487 5.487 0 0 0-.23-.298a4.065 4.065 0 0 1-.629-1.007a7.578 7.578 0 0 0-.243-.443c-.125-.22-.284-.495-.45-.804c-.333-.619-.695-1.369-.883-2.1c-.187-.729-.215-1.484.265-2.017c.426-.473 1.172-.669 2.293-.559c-.033-.096-.053-.176-.109-.304a7.125 7.125 0 0 0-.983-1.617c-.95-1.178-2.487-2.346-4.863-2.384h-.108zm-6.276.047c-.12 0-.24.004-.36.01c-.954.053-1.856.322-2.501.986c-.647.663-1.072 1.751-.98 3.553c.019.34.172 1.296.434 2.43c.262 1.136.634 2.471 1.08 3.65c.446 1.18.988 2.207 1.502 2.693c.259.243.484.341.688.333c.205-.01.451-.124.753-.475a40.03 40.03 0 0 1 1.71-1.877a3.206 3.206 0 0 1-.932-1.307a3.116 3.116 0 0 1-.17-1.58c.097-.678.11-1.312.099-1.812c-.012-.488-.048-.812-.048-1.015v-.028a8.806 8.806 0 0 1 .559-3.095c.264-.682.658-1.375 1.249-1.936c-.58-.185-1.61-.467-2.725-.52a7.4 7.4 0 0 0-.36-.01zm11.714 4.842c-.641.008-1.001.169-1.19.379c-.268.298-.293.82-.127 1.464c.165.644.507 1.365.829 1.963c.16.3.316.57.442.788c.127.22.22.376.276.51c.052.122.11.23.168.331c.248-.509.293-1.008.267-1.529c-.033-.644-.187-1.303-.164-1.97c.025-.78.184-1.289.198-1.892a5.639 5.639 0 0 0-.699-.044m-7.78.105a2.743 2.743 0 0 0-.582.068a4.49 4.49 0 0 0-1.09.412c-.115.06-.226.13-.33.209l-.02.018c.006.134.033.459.045.936c.01.523-.002 1.19-.106 1.91c-.226 1.568.946 2.866 2.324 2.868c.08-.322.213-.648.345-.992c.384-1.003 1.139-1.734.503-4.589c-.104-.467-.31-.656-.594-.763a1.431 1.431 0 0 0-.495-.077m7.48.187h.048c.062.002.12.009.17.02a.396.396 0 0 1 .13.051a.153.153 0 0 1 .071.1v.008a.215.215 0 0 1-.034.124a.614.614 0 0 1-.104.137a.646.646 0 0 1-.364.195a.57.57 0 0 1-.388-.095a.569.569 0 0 1-.123-.108a.235.235 0 0 1-.06-.116a.151.151 0 0 1 .04-.118a.361.361 0 0 1 .111-.082a1.256 1.256 0 0 1 .504-.118zm-7.388.154c.05 0 .103.005.157.012c.144.02.273.057.371.112c.048.025.09.057.126.097a.214.214 0 0 1 .042.073a.195.195 0 0 1 .009.083a.274.274 0 0 1-.071.141a.608.608 0 0 1-.135.12a.619.619 0 0 1-.424.103a.694.694 0 0 1-.396-.209a.652.652 0 0 1-.112-.15a.25.25 0 0 1-.039-.162c.014-.1.099-.15.18-.18a.842.842 0 0 1 .29-.036zm8.56 6.732h-.003c-.139.05-.253.07-.35.11a.423.423 0 0 0-.225.197c-.06.105-.11.292-.095.61a.49.49 0 0 0 .14.064c.161.048.432.08.735.075c.602-.007 1.344-.143 1.738-.321c.323-.146.623-.336.891-.564c-1.317.264-2.06.194-2.517.011a1.247 1.247 0 0 1-.314-.183zm-7.588.086h-.02c-.05.004-.123.02-.263.172c-.33.358-.444.582-.716.792c-.27.21-.623.321-1.327.461c-.223.044-.35.093-.436.132c.028.022.025.028.066.049c.103.055.236.103.342.13c.303.073.8.159 1.319.073c.518-.086 1.058-.327 1.518-.953c.08-.108.088-.268.023-.44c-.067-.17-.211-.318-.313-.36a.632.632 0 0 0-.193-.054z"
                    ></path>
                  </svg>
                  <p className="tools-subtitle">PostgreSQL</p>
                </div>

                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.6em"
                    height="3em"
                    viewBox="0 0 256 296"
                  >
                    <path
                      fill="#1d1d1f"
                      d="M219.013 94.362v106.594l-90.576 53.588l-.819.745v39.839l.819.772L256 222.216V73.684l-1.205-.295l-35.963 20.106z"
                    ></path>
                    <path
                      fill="#444446"
                      d="m37.57 201.829l90.867 52.715V295.9L0 221.925V73.975l1.318-.199l35.859 20.848l.393 1.194z"
                    ></path>
                    <path
                      fill="#707070"
                      d="M37.57 95.818L0 73.975L128.146 0L256 73.684l-36.987 20.678l-90.867-51.841z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m126.878 189.638l-.984-1.004v-40.026l.984-.508l.239-.987l34.315-20.017l1.05.235v41.242z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M90.68 169.858v-42.823l.995-.049l34.906 20.314l.297.8v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="M126.284 105.969L90.68 127.035l36.198 21.065l35.604-20.769z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m82.57 215.748l-.983-1.004v-40.027l.983-.507l.24-.987l34.314-20.017l1.05.235v41.241z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M46.373 195.968v-42.824l.994-.049l34.906 20.315l.297.8v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="m81.977 132.079l-35.604 21.065L82.57 174.21l35.604-20.769z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m174.35 216.737l-.984-1.004v-40.027l.984-.507l.239-.987l34.315-20.017l1.05.235v41.241z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M138.152 196.957v-42.824l.995-.049l34.906 20.315l.297.8v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="m173.756 133.068l-35.604 21.065l36.198 21.066l35.604-20.769z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m130.042 242.847l-.983-1.004v-40.027l.983-.507l.24-.988l34.315-20.016l1.049.235v41.241z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M93.845 223.067v-42.824l.994-.049l34.907 20.314l.296.801v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="m129.449 159.177l-35.604 21.066l36.197 21.066l35.604-20.769z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m126.878 132.87l-.984-1.005V91.839l.984-.507l.239-.988l34.315-20.016l1.05.235v41.241z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M90.68 113.09V70.266l.995-.049l34.906 20.314l.297.801v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="M126.284 49.2L90.68 70.266l36.198 21.066l35.604-20.769z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m82.57 158.979l-.983-1.004v-40.026l.983-.508l.24-.987l34.314-20.017l1.05.235v41.242z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M46.373 139.199V96.376l.994-.049l34.906 20.314l.297.8v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="M81.977 75.31L46.373 96.376l36.197 21.065l35.604-20.769z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m174.35 159.968l-.984-1.004v-40.026l.984-.508l.239-.987l34.315-20.017l1.05.235v41.242z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M138.152 140.188V97.365l.995-.049l34.906 20.314l.297.8v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="m173.756 76.299l-35.604 21.066l36.198 21.065l35.604-20.769z"
                    ></path>
                    <path
                      fill="#1d1d1f"
                      d="m130.042 186.078l-.983-1.004v-40.027l.983-.507l.24-.987l34.315-20.017l1.049.235v41.241z"
                    ></path>
                    <path
                      fill="#444446"
                      d="M93.845 166.298v-42.824l.994-.049l34.907 20.315l.296.8v41.538z"
                    ></path>
                    <path
                      fill="#707070"
                      d="m129.449 102.408l-35.604 21.066l36.197 21.066l35.604-20.769z"
                    ></path>
                  </svg>
                  <p className="tools-subtitle">Sequelize</p>
                </div>

                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 256 192"
                  >
                    <path
                      fill="#1d1d1f"
                      d="M220.281 110.514c-8.906.046-16.647 2.191-23.128 5.362c-2.379-4.71-4.757-8.906-5.176-11.984c-.467-3.59-1.026-5.782-.467-10.072c.56-4.29 3.078-10.399 3.031-10.865s-.56-2.658-5.689-2.704s-9.559.979-10.072 2.331s-1.492 4.43-2.145 7.6c-.886 4.664-10.258 21.31-15.62 30.03c-1.726-3.403-3.218-6.388-3.545-8.766c-.466-3.59-1.026-5.782-.466-10.072s3.078-10.398 3.031-10.865c-.047-.466-.56-2.658-5.689-2.704c-5.13-.047-9.56.979-10.072 2.331c-.513 1.353-1.073 4.523-2.145 7.601s-13.523 30.87-16.787 38.05a215 215 0 0 1-4.15 8.627s-.047.14-.187.373a118 118 0 0 1-1.398 2.658v.046c-.7 1.26-1.446 2.425-1.819 2.425c-.28 0-.793-3.357.093-7.927c1.865-9.652 6.295-24.667 6.249-25.18c0-.28.839-2.891-2.891-4.244c-3.638-1.352-4.943.886-5.27.886s-.56.793-.56.793s4.058-16.88-7.74-16.88c-7.367 0-17.533 8.067-22.569 15.341a6270 6270 0 0 0-17.16 9.373c-2.75 1.539-5.595 3.078-8.253 4.523c-.187-.186-.373-.42-.56-.606c-14.269-15.248-40.661-26.02-39.542-46.49c.42-7.461 2.984-27.046 50.687-50.827c39.262-19.352 70.505-13.99 75.914-2.099c7.74 16.974-16.74 48.496-57.309 53.065c-15.481 1.726-23.595-4.243-25.646-6.481c-2.145-2.332-2.472-2.472-3.265-2.005c-1.305.7-.466 2.798 0 4.01c1.213 3.17 6.202 8.766 14.642 11.518c7.461 2.424 25.6 3.777 47.563-4.71c24.574-9.513 43.786-35.952 38.144-58.101c-5.643-22.476-42.947-29.89-78.246-17.347C61.086 13.99 38.33 25.74 21.963 41.035C2.518 59.22-.56 75.028.699 81.65c4.524 23.501 36.932 38.796 49.895 50.127c-.653.373-1.26.7-1.772.98c-6.482 3.217-31.196 16.133-37.351 29.796c-6.994 15.481 1.12 26.58 6.482 28.071c16.647 4.617 33.76-3.683 42.946-17.393c9.186-13.709 8.067-31.522 3.824-39.682c-.047-.093-.093-.187-.187-.28c1.679-.979 3.404-2.005 5.083-2.984a248 248 0 0 1 9.373-5.27c-1.586 4.337-2.752 9.513-3.311 16.974c-.7 8.767 2.89 20.144 7.6 24.62c2.099 1.96 4.57 2.006 6.156 2.006c5.502 0 7.974-4.57 10.725-9.979c3.357-6.621 6.388-14.315 6.388-14.315s-3.777 20.797 6.482 20.797c3.73 0 7.507-4.85 9.186-7.321v.046s.093-.14.28-.466c.373-.606.606-.98.606-.98v-.092c1.492-2.612 4.85-8.534 9.839-18.373c6.435-12.683 12.637-28.537 12.637-28.537s.56 3.87 2.471 10.305c1.12 3.777 3.45 7.927 5.316 11.937c-1.492 2.099-2.425 3.264-2.425 3.264l.047.047c-1.213 1.585-2.518 3.31-3.964 4.99c-5.083 6.061-11.144 13.01-11.984 15.014c-.98 2.378-.746 4.104 1.12 5.503c1.352 1.026 3.776 1.165 6.248 1.026c4.57-.327 7.787-1.446 9.372-2.145c2.472-.886 5.363-2.239 8.067-4.244c4.99-3.684 8.02-8.953 7.741-15.9c-.14-3.824-1.399-7.648-2.938-11.239c.467-.652.886-1.305 1.353-1.958c7.88-11.518 13.989-24.155 13.989-24.155s.56 3.87 2.471 10.306c.933 3.264 2.845 6.808 4.523 10.258c-7.414 6.016-11.984 13.01-13.616 17.58c-2.937 8.487-.653 12.31 3.684 13.196c1.958.42 4.756-.513 6.808-1.399c2.611-.839 5.689-2.284 8.627-4.43c4.99-3.683 9.792-8.813 9.512-15.76c-.14-3.171-.979-6.296-2.145-9.327c6.295-2.61 14.409-4.056 24.76-2.844c22.197 2.611 26.58 16.46 25.74 22.29c-.839 5.828-5.502 8.999-7.04 9.978c-1.54.98-2.052 1.306-1.912 2.005c.186 1.026.932.98 2.238.793c1.819-.326 11.658-4.71 12.077-15.435c.7-13.709-12.357-28.677-35.439-28.537M49.055 168.242c-7.368 8.02-17.626 11.051-22.056 8.487c-4.756-2.752-2.891-14.596 6.155-23.082c5.502-5.176 12.59-9.98 17.3-12.917c1.072-.653 2.658-1.585 4.57-2.751c.326-.187.513-.28.513-.28l1.119-.7c3.31 12.124.14 22.803-7.601 31.243m53.625-36.465c-2.565 6.249-7.927 22.243-11.191 21.357c-2.798-.746-4.524-12.87-.56-24.854c2.005-6.016 6.248-13.197 8.72-15.994c4.01-4.477 8.44-5.97 9.512-4.15c1.353 2.378-4.896 19.724-6.481 23.641m44.252 21.17c-1.073.56-2.098.933-2.565.653c-.326-.187.467-.933.467-.933s5.549-5.968 7.74-8.673c1.26-1.585 2.751-3.45 4.337-5.549v.606c0 7.135-6.902 11.938-9.98 13.896m34.133-7.787c-.793-.56-.653-2.425 2.005-8.254c1.026-2.285 3.45-6.108 7.601-9.792c.466 1.492.793 2.938.746 4.29c-.047 9-6.481 12.357-10.352 13.756"
                    ></path>
                  </svg>
                  <p className="tools-subtitle">Sass</p>
                </div>
              </div>
              <div className="txt">
                <a
                  className="text-blank"
                  href="https://www.adoptareborn.com/"
                  target="_blank"
                >
                  <p className="txt-effect mg-top text-uppercase fw-regular">
                    Voir le projet
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="../assets/memory_game.png"
              alt="memory card game with illustrations"
              width={466}
              height={491}
            />
            <div className="carousel-info text-center">
              <h3 className="carousel-title fw-semibold">Memory Card Game</h3>
              <p className="carousel-text">
                Création d'un jeu de paires et de mémoire.
              </p>
            </div>{' '}
            <div className="tools">
              <div className="tools-dev">
                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 128 128"
                  >
                    <g fill="#1d1d1f">
                      <circle cx={64} cy={64} r={11.4}></circle>
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path>
                    </g>
                  </svg>
                  <p className="tools-subtitle">React</p>
                </div>

                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <g clipPath="url(#akarIconsJavascriptFill0)">
                        <path
                          fill="#1d1d1f"
                          fillRule="evenodd"
                          d="M0 0h24v24H0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113m-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416"
                          clipRule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="akarIconsJavascriptFill0">
                          <path fill="#1d1d1f" d="M0 0h24v24H0z"></path>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                  <p className="tools-subtitle">JavaScript</p>
                </div>

                <div className="tools-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 256 192"
                  >
                    <path
                      fill="#1d1d1f"
                      d="M220.281 110.514c-8.906.046-16.647 2.191-23.128 5.362c-2.379-4.71-4.757-8.906-5.176-11.984c-.467-3.59-1.026-5.782-.467-10.072c.56-4.29 3.078-10.399 3.031-10.865s-.56-2.658-5.689-2.704s-9.559.979-10.072 2.331s-1.492 4.43-2.145 7.6c-.886 4.664-10.258 21.31-15.62 30.03c-1.726-3.403-3.218-6.388-3.545-8.766c-.466-3.59-1.026-5.782-.466-10.072s3.078-10.398 3.031-10.865c-.047-.466-.56-2.658-5.689-2.704c-5.13-.047-9.56.979-10.072 2.331c-.513 1.353-1.073 4.523-2.145 7.601s-13.523 30.87-16.787 38.05a215 215 0 0 1-4.15 8.627s-.047.14-.187.373a118 118 0 0 1-1.398 2.658v.046c-.7 1.26-1.446 2.425-1.819 2.425c-.28 0-.793-3.357.093-7.927c1.865-9.652 6.295-24.667 6.249-25.18c0-.28.839-2.891-2.891-4.244c-3.638-1.352-4.943.886-5.27.886s-.56.793-.56.793s4.058-16.88-7.74-16.88c-7.367 0-17.533 8.067-22.569 15.341a6270 6270 0 0 0-17.16 9.373c-2.75 1.539-5.595 3.078-8.253 4.523c-.187-.186-.373-.42-.56-.606c-14.269-15.248-40.661-26.02-39.542-46.49c.42-7.461 2.984-27.046 50.687-50.827c39.262-19.352 70.505-13.99 75.914-2.099c7.74 16.974-16.74 48.496-57.309 53.065c-15.481 1.726-23.595-4.243-25.646-6.481c-2.145-2.332-2.472-2.472-3.265-2.005c-1.305.7-.466 2.798 0 4.01c1.213 3.17 6.202 8.766 14.642 11.518c7.461 2.424 25.6 3.777 47.563-4.71c24.574-9.513 43.786-35.952 38.144-58.101c-5.643-22.476-42.947-29.89-78.246-17.347C61.086 13.99 38.33 25.74 21.963 41.035C2.518 59.22-.56 75.028.699 81.65c4.524 23.501 36.932 38.796 49.895 50.127c-.653.373-1.26.7-1.772.98c-6.482 3.217-31.196 16.133-37.351 29.796c-6.994 15.481 1.12 26.58 6.482 28.071c16.647 4.617 33.76-3.683 42.946-17.393c9.186-13.709 8.067-31.522 3.824-39.682c-.047-.093-.093-.187-.187-.28c1.679-.979 3.404-2.005 5.083-2.984a248 248 0 0 1 9.373-5.27c-1.586 4.337-2.752 9.513-3.311 16.974c-.7 8.767 2.89 20.144 7.6 24.62c2.099 1.96 4.57 2.006 6.156 2.006c5.502 0 7.974-4.57 10.725-9.979c3.357-6.621 6.388-14.315 6.388-14.315s-3.777 20.797 6.482 20.797c3.73 0 7.507-4.85 9.186-7.321v.046s.093-.14.28-.466c.373-.606.606-.98.606-.98v-.092c1.492-2.612 4.85-8.534 9.839-18.373c6.435-12.683 12.637-28.537 12.637-28.537s.56 3.87 2.471 10.305c1.12 3.777 3.45 7.927 5.316 11.937c-1.492 2.099-2.425 3.264-2.425 3.264l.047.047c-1.213 1.585-2.518 3.31-3.964 4.99c-5.083 6.061-11.144 13.01-11.984 15.014c-.98 2.378-.746 4.104 1.12 5.503c1.352 1.026 3.776 1.165 6.248 1.026c4.57-.327 7.787-1.446 9.372-2.145c2.472-.886 5.363-2.239 8.067-4.244c4.99-3.684 8.02-8.953 7.741-15.9c-.14-3.824-1.399-7.648-2.938-11.239c.467-.652.886-1.305 1.353-1.958c7.88-11.518 13.989-24.155 13.989-24.155s.56 3.87 2.471 10.306c.933 3.264 2.845 6.808 4.523 10.258c-7.414 6.016-11.984 13.01-13.616 17.58c-2.937 8.487-.653 12.31 3.684 13.196c1.958.42 4.756-.513 6.808-1.399c2.611-.839 5.689-2.284 8.627-4.43c4.99-3.683 9.792-8.813 9.512-15.76c-.14-3.171-.979-6.296-2.145-9.327c6.295-2.61 14.409-4.056 24.76-2.844c22.197 2.611 26.58 16.46 25.74 22.29c-.839 5.828-5.502 8.999-7.04 9.978c-1.54.98-2.052 1.306-1.912 2.005c.186 1.026.932.98 2.238.793c1.819-.326 11.658-4.71 12.077-15.435c.7-13.709-12.357-28.677-35.439-28.537M49.055 168.242c-7.368 8.02-17.626 11.051-22.056 8.487c-4.756-2.752-2.891-14.596 6.155-23.082c5.502-5.176 12.59-9.98 17.3-12.917c1.072-.653 2.658-1.585 4.57-2.751c.326-.187.513-.28.513-.28l1.119-.7c3.31 12.124.14 22.803-7.601 31.243m53.625-36.465c-2.565 6.249-7.927 22.243-11.191 21.357c-2.798-.746-4.524-12.87-.56-24.854c2.005-6.016 6.248-13.197 8.72-15.994c4.01-4.477 8.44-5.97 9.512-4.15c1.353 2.378-4.896 19.724-6.481 23.641m44.252 21.17c-1.073.56-2.098.933-2.565.653c-.326-.187.467-.933.467-.933s5.549-5.968 7.74-8.673c1.26-1.585 2.751-3.45 4.337-5.549v.606c0 7.135-6.902 11.938-9.98 13.896m34.133-7.787c-.793-.56-.653-2.425 2.005-8.254c1.026-2.285 3.45-6.108 7.601-9.792c.466 1.492.793 2.938.746 4.29c-.047 9-6.481 12.357-10.352 13.756"
                    ></path>
                  </svg>
                  <p className="tools-subtitle">Sass</p>
                </div>
              </div>
            </div>
            <div className="txt">
              <a className="text-blank" href="#" target="_blank">
                <p className="txt-effect mg-top text-uppercase fw-regular">
                  Voir le projet
                </p>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
