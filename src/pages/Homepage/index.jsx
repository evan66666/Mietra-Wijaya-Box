import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, RatingBar, Slider } from "../../components";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Muhammad's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[4211px] w-full relative">
        <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto overflow-auto bg-white-A700 absolute">
          <header className="flex justify-center items-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row md:flex-col justify-start w-full gap-8 p-[7px] bg-white-A700">
                <div className="flex flex-row justify-start items-center w-[11%] md:w-full ml-[92px] gap-2 md:ml-5">
                  <Img src="images/img_mdi_phone.svg" alt="mdiphone_one" className="h-[24px] w-[24px]" />
                  <Text as="p">0815-6501-090</Text>
                </div>
                <div className="flex flex-row justify-start items-center w-[11%] md:w-full gap-2">
                  <Img src="images/img_mdi_whatsapp.svg" alt="mdiwhatsapp_one" className="h-[24px] w-[24px]" />
                  <Text as="p">0822-1868-1996</Text>
                </div>
                <div className="flex flex-row justify-start items-center w-[17%] md:w-full gap-2">
                  <Img src="images/img_mdi_gmail.svg" alt="mdigmail_one" className="h-[24px] w-[24px] mb-px" />
                  <Text as="p">cvmietrawijaya@gmail.com</Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-center w-full p-7 md:gap-10 sm:p-5 bg-indigo-900">
                <div className="flex flex-row justify-start items-center ml-[72px] gap-1 md:ml-5">
                  <Img src="images/img_frame_84.png" alt="image" className="w-[21%] md:h-auto sm:w-full object-cover" />
                  <Heading as="h4" className="!text-amber-600 tracking-[-1.56px]">
                    Mietra Wijaya Box
                  </Heading>
                </div>
                <ul className="flex flex-row justify-between w-auto gap-9">
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700">
                        Beranda
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700">
                        Tentang Kami
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700">
                        Produk
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700">
                        Galeri
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700">
                        Kontak
                      </Text>
                    </a>
                  </li>
                </ul>
                <Button shape="round" className="mr-[72px] md:mr-5 sm:px-5 font-medium min-w-[152px]">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full mt-12 gap-24">
            <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[1253px]">
              <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                <div className="flex flex-row justify-center w-[34%] md:w-full">
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-start justify-start w-full gap-3">
                      <Heading size="xl" as="h1" className="!text-indigo-800">
                        <span className="text-indigo-800">Solusi Tepat </span>
                        <span className="text-orange_600_01">untuk memenuhi kebutuhan kemasan produkmu</span>
                      </Heading>
                      <Text as="p" className="!text-blue_gray-900 leading-[150%]">
                        Kami adalah produsen kardus karton yang berpengalaman dan terpercaya, siap menyediakan solusi
                        kemasan yang tepat bagi produk Anda.
                      </Text>
                      <Button shape="round" className="sm:px-5 font-medium min-w-[152px] sm:min-w-full">
                        Hubungi Kami
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[407px] w-[47%] md:w-full relative">
                  <div className="h-[362px] w-[69%] bottom-0 left-0 m-auto opacity-0.8 bg-orange-A100_a2 absolute rounded-lg" />
                  <div className="h-[327px] w-[59%] right-0 top-0 m-auto rotate-[180deg] bg-indigo-900_91 absolute rounded-lg" />
                  <Img
                    src="images/img_image_4.png"
                    alt="imagefour_one"
                    className="justify-center h-[366px] w-[95%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-24">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <div className="flex flex-col items-center justify-start w-[49%] md:w-full pt-[3px] gap-3">
                    <Heading as="h2" className="!text-indigo-900">
                      Produk Kami
                    </Heading>
                    <Text as="p" className="!text-blue_gray-900 text-center leading-[140%]">
                      Kami melayani pembuatan box dengan bahan, bentuk, ukuran, hingga desain sablon sesuai dengan
                      keinginan anda
                    </Text>
                  </div>
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 2 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-full"
                    items={[...Array(6)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Img
                          src="images/img_rectangle_35.png"
                          alt="image"
                          className="md:h-auto mx-2.5 object-cover rounded-lg"
                        />
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-evenly w-full mt-12 gap-10">
                <div className="flex flex-row justify-start items-center w-[29%] md:w-full gap-4 p-4 bg-indigo-900 shadow-xs rounded">
                  <Img
                    src="images/img_mdi_cube_unfolded.svg"
                    alt="mdicube_one"
                    className="h-[40px] w-[40px] ml-[15px]"
                  />
                  <Heading
                    size="xs"
                    as="h3"
                    className="w-[74%] mr-4 !text-amber-300 !font-opensans !font-semibold leading-[150%]"
                  >
                    custom bentuk, ukuran, hingga desain print
                  </Heading>
                </div>
                <Button
                  color="indigo_900"
                  size="sm"
                  leftIcon={<Img src="images/img_mdicubesend.svg" alt="mdi:cube-send" />}
                  className="gap-4 sm:px-5 font-opensans font-semibold min-w-[360px] rounded"
                >
                  Pengiriman hingga ke luar kota
                </Button>
                <div className="flex flex-row justify-start items-center w-[29%] md:w-full gap-4 p-4 bg-indigo-900 shadow-xs rounded">
                  <Img
                    src="images/img_mdi_cube_outline.svg"
                    alt="mdicube_three"
                    className="h-[40px] w-[40px] ml-[15px]"
                  />
                  <Heading
                    size="xs"
                    as="h4"
                    className="w-[74%] mr-4 !text-amber-300 !font-opensans !font-semibold leading-[150%]"
                  >
                    Minimum Order Mulai dari 300 pcs
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[31px]">
              <div className="flex flex-row justify-center w-full md:px-5 max-w-[1240px]">
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[110px] md:gap-10">
                  <div className="h-[347px] w-[39%] md:w-full relative">
                    <Img
                      src="images/img_ebd92625_5e1d_4.png"
                      alt="ebd926255e1dfou"
                      className="h-[273px] w-[44%] sm:w-full right-0 top-0 m-auto object-cover absolute rounded-lg"
                    />
                    <Img
                      src="images/img_ebd92625_5e1d_4_273x204.png"
                      alt="ebd926255e1dfou"
                      className="h-[273px] w-[44%] sm:w-full left-1/4 top-[8%] m-auto object-cover absolute rounded-lg"
                    />
                    <Img
                      src="images/img_ebd92625_5e1d_4_1.png"
                      alt="ebd926255e1dfou"
                      className="h-[273px] w-[44%] sm:w-full bottom-0 left-0 m-auto object-cover absolute rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[41%] md:w-full pt-1.5 gap-[21px] px-1.5">
                    <Heading as="h5" className="!text-indigo-900">
                      Siapa Kami?
                    </Heading>
                    <Text size="lg" as="p" className="w-[94%] !text-blue_gray-900 text-center !font-normal">
                      Mietra Wijaya Box adalah produsen terkemuka dalam industri kemasan karton, menyediakan solusi
                      kemasan berkualitas tinggi untuk bisnis Anda. Kami menghasilkan kotak karton yang kuat dan tahan
                      lama, memberikan perlindungan optimal untuk produk Anda.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full md:px-5 max-w-[1240px]">
                <div className="flex flex-row justify-center w-full p-6 sm:p-5 bg-white-A700 shadow-xs rounded">
                  <div className="flex flex-row sm:flex-col justify-between w-[72%] px-[34px] sm:gap-10 sm:px-5">
                    <div className="flex flex-col items-center justify-start pt-1 gap-[9px]">
                      <Heading size="md" as="h6" className="!text-orange-600 text-center">
                        2004
                      </Heading>
                      <Text as="p" className="text-center">
                        Berdiri Sejak
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[7px]">
                      <Heading size="md" as="h2" className="mt-1 !text-orange-600 text-center">
                        200+
                      </Heading>
                      <Text as="p" className="text-center">
                        Client
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[7px]">
                      <Heading size="md" as="h2" className="mt-1 !text-orange-600 text-center">
                        50+
                      </Heading>
                      <Text as="p" className="text-center">
                        Order/Tahun
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start pt-1 gap-[9px]">
                      <Heading size="md" as="h2" className="!text-orange-600 text-center">
                        500+
                      </Heading>
                      <Text as="p" className="text-center">
                        pcs/minggu
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-24 md:px-5 max-w-[1240px]">
              <div className="flex flex-col items-center justify-start w-full pt-[5px] gap-[42px]">
                <Text size="xl" as="p">
                  Apa saja yang bisa dikustomisasi?
                </Text>
                <div className="justify-center w-full gap-3 grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                  <div className="h-[373px] w-full relative">
                    <Img
                      src="images/img_rectangle_29.png"
                      alt="bentuk_box_one"
                      className="justify-center h-[373px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                    />
                    <Heading as="h4" className="w-max bottom-[8%] right-0 left-0 m-auto tracking-[0.15px] absolute">
                      Bentuk Box
                    </Heading>
                  </div>
                  <div className="h-[373px] w-full relative">
                    <Img
                      src="images/img_rectangle_30.png"
                      alt="image"
                      className="justify-center h-[373px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                    />
                    <Heading as="h4" className="w-max bottom-[9%] right-0 left-0 m-auto tracking-[0.15px] absolute">
                      Bahan Box
                    </Heading>
                  </div>
                  <div className="h-[373px] w-full relative">
                    <Img
                      src="images/img_rectangle_33.png"
                      alt="image"
                      className="justify-center h-[373px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                    />
                    <Heading as="h4" className="w-max bottom-[7%] right-0 left-0 m-auto tracking-[0.15px] absolute">
                      Ukuran Box
                    </Heading>
                  </div>
                  <div className="h-[373px] w-full relative">
                    <Img
                      src="images/img_rectangle_34.png"
                      alt="image"
                      className="justify-center h-[373px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                    />
                    <Heading as="h4" className="w-max bottom-[8%] right-0 left-0 m-auto tracking-[0.15px] absolute">
                      Desain Sablon
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[91%] md:w-full pt-[5px] gap-[42px]">
                <Text size="xl" as="p">
                  Kenapa Memilih Kami?
                </Text>
                <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  <div className="flex flex-col items-center justify-center w-full gap-2 p-[18px] bg-white-A700 shadow-xs rounded-lg">
                    <div className="flex flex-col items-center justify-start w-[29%] md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={28}
                        starCount={3}
                        className="flex justify-between w-[92px]"
                      />
                      <div className="flex flex-row justify-start w-[66%] md:w-full gap-1">
                        <Img src="images/img_mdi_star.svg" alt="best_quality" className="h-[28px] w-[28px]" />
                        <Img src="images/img_mdi_star.svg" alt="best_quality" className="h-[28px] w-[28px]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[96%] md:w-full mb-0.5 pt-1 gap-1.5">
                      <Text size="lg" as="p">
                        Best Quality
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-900 text-center">
                        Bahan kardus berkualitas serta proses produksi terbaik
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-2 p-[17px] bg-white-A700 shadow-xs rounded-lg">
                    <Img src="images/img_frame_52.svg" alt="image" className="h-[54px] w-[54px]" />
                    <div className="flex flex-col items-center justify-start w-[95%] md:w-full mb-1.5 pt-[3px] gap-[7px]">
                      <Text size="lg" as="p">
                        On Time
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-900 text-center">
                        Pengiriman tepat waktu sesuai dengan kesepakatan
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-2 p-[18px] bg-white-A700 shadow-xs rounded-lg">
                    <Img src="images/img_frame_52_light_green_300.svg" alt="image" className="h-[54px] w-[54px]" />
                    <div className="flex flex-col items-center justify-start w-[96%] md:w-full mb-1.5 pt-0.5 gap-2">
                      <Text size="lg" as="p">
                        Affordable
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-900 text-center">
                        Harga yang bersaing untuk efisiensi perusahaan Anda
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-2 p-[17px] bg-white-A700 shadow-xs rounded-lg">
                    <Img
                      src="images/img_frame_52_light_green_300_54x54.svg"
                      alt="image"
                      className="h-[54px] w-[54px]"
                    />
                    <div className="flex flex-col items-center justify-start w-[83%] md:w-full mb-1.5 pt-0.5 gap-2">
                      <Text size="lg" as="p">
                        Minimum Order
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-900 text-center">
                        Minimal pemesanan yang cukup rendah dibanding kompetitor
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-2 p-[17px] bg-white-A700 shadow-xs rounded-lg">
                    <Img src="images/img_mdi_hand_heart_outline.svg" alt="mdihandheart" className="h-[54px] w-[54px]" />
                    <div className="flex flex-col items-center justify-start w-[83%] md:w-full mb-1.5 pt-0.5 gap-2">
                      <Text size="lg" as="p">
                        Good Service
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-900 text-center">
                        Memberikan pelayanan yang terbaik demi kepuasan pelanggan
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-2 p-[17px] bg-white-A700 shadow-xs rounded-lg">
                    <Img
                      src="images/img_mdi_shield_check_outline.svg"
                      alt="mdishield_one"
                      className="h-[54px] w-[54px]"
                    />
                    <div className="flex flex-col items-center justify-start w-[79%] md:w-full mb-1.5 pt-0.5 gap-2">
                      <Text size="lg" as="p">
                        Guaranteed
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-900 text-center">
                        Memberikan garansi terhadap barang yang kami produksi
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[214px] w-full relative">
                <Img
                  src="images/img_unsplash_t85_m3dmfs.png"
                  alt="unsplashteighty"
                  className="justify-center h-[214px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
                />
                <div className="flex flex-col items-start justify-start w-[47%] h-full gap-[21px] left-[4%] bottom-0 top-0 m-auto absolute">
                  <Heading size="lg" as="h1">
                    <span className="text-orange_A100">Diskusikan</span>
                    <span className="text-white-A700">packagingmu dan </span>
                    <span className="text-orange_A100">Order sekarang juga!</span>
                  </Heading>
                  <Button shape="round" className="sm:px-5 font-medium min-w-[152px] sm:min-w-full">
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex justify-center items-center w-full mt-24 pt-[83px] md:pt-5 bg-indigo-900">
            <div className="flex flex-col items-center justify-center w-full gap-[18px]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row md:flex-col justify-between items-start w-full pr-[77px] md:gap-10 md:px-5 max-w-[1240px]">
                  <div className="flex flex-col items-start justify-start w-[20%] md:w-full gap-2">
                    <div className="flex flex-row justify-start items-center gap-2">
                      <Img
                        src="images/img_frame_84.png"
                        alt="image_one"
                        className="w-[24%] md:h-auto sm:w-full my-[3px] object-cover"
                      />
                      <Heading size="xs" as="h6" className="!text-amber-600 tracking-[-1.04px]">
                        CV. Mietra Wijaya Box
                      </Heading>
                    </div>
                    <Text size="s" as="p" className="!text-amber-300 !leading-5">
                      Jl. Tahunan Wonosari RT 04 RW 04, Tahunan, Jepara, Jawa Tengah, 59451
                    </Text>
                  </div>
                  <div className="h-[179px] w-px md:w-full md:h-px rotate-[-91deg] bg-amber-600" />
                  <div className="flex flex-col items-start justify-start w-[21%] md:w-full gap-[11px] py-[3px]">
                    <Heading size="xs" as="h6" className="!text-amber-600 tracking-[0.15px]">
                      Jam Operasional
                    </Heading>
                    <div className="flex flex-row justify-start w-full mb-[50px] pt-0.5">
                      <ul className="flex flex-col items-start justify-start w-full gap-2">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-amber-300 tracking-[0.15px]">
                              Senin - Jumat
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-amber-300 tracking-[0.15px]">
                              08.00 - 16.00
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="leading-6">
                            <Text as="p" className="!text-amber-300 tracking-[0.15px]">
                              Sabtu, Minggu, Tanggal Merah Tutup
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="h-[179px] w-px md:w-full md:h-px rotate-[-91deg] bg-amber-600" />
                  <div className="flex flex-col items-start justify-start w-[21%] md:w-full gap-[15px] py-[3px]">
                    <Heading size="xs" as="h6" className="!text-amber-600 tracking-[0.15px]">
                      Hubungi Kami
                    </Heading>
                    <div className="flex flex-col items-start justify-start w-full mb-[50px] gap-3">
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Img
                          src="images/img_mdi_phone_amber_300.svg"
                          alt="mdiphone_three"
                          className="h-[24px] w-[24px]"
                        />
                        <Text as="p" className="!text-amber-300">
                          0815-6501-090
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Img
                          src="images/img_mdi_whatsapp_amber_300.svg"
                          alt="mdiwhatsapp"
                          className="h-[24px] w-[24px]"
                        />
                        <Text as="p" className="!text-amber-300">
                          0822-1868-1996
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Img
                          src="images/img_mdi_gmail_amber_300.svg"
                          alt="mdigmail_three"
                          className="h-[24px] w-[24px]"
                        />
                        <Text as="p" className="!text-amber-300">
                          cvmietrawijaya@gmail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full p-3 bg-white-A700">
                <Text size="xs" as="p" className="mt-px ml-[87px] md:ml-5 !text-red-200 tracking-[0.15px]">
                  © Copyright 2023 CV. Mietra Wijaya Box. All rights reserved.Web design by ZF Solution. | Web
                  development by ZF Solution{" "}
                </Text>
              </div>
            </div>
          </footer>
        </div>
        <div className="h-[64px] w-[64px] right-[1%] top-[22%] m-auto bg-green-A400 absolute rounded-[50%]" />
      </div>
    </>
  );
}
