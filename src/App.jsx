import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import PostData from "./pages/PostData";
import '../public/index.css';
import { useEffect } from "react";
// import { getNices, getPosts, getUsers } from "./services/getGData";
import { getAll } from "./services/getGData";
import { humanDiffTime, mergedDobledata, transformData } from './helpers/transformData';
import { Link } from "react-router-dom";

// import Post from './pages/Pages'

function App() {
  
  const [dataAll, setAll] = useState([]);
  const [dataPosts, setPosts] = useState([]);
  const [dataUsers, setUsers] = useState([]);
  const [dataNices, setNices] = useState([]);
  const [dataPUN, setPUN] = useState([]);

  useEffect(() => {
    // let wrap_upc = []
    getAll((posts) => 
      // posts.forEach(function (item, index) {
        
      //   // console.log(transformData(item))
      //   // const upc = transformData(item)
      //   const upc = item
      //   wrap_upc[index] = upc
      //   // console.log(upc);
      //   // console.log(wrap_upc);
      //   // console.log(index);
      // }),
      setAll(posts));
  }, []);


  // useEffect(() => {
  //   setPosts(dataAll[0]);
  //   setUsers(dataAll[1]);
  //   setNices(dataAll[2]);
  // }, [])

  // console.log(dataAll);

  // console.log(dataAll);
  useEffect(() => {
    let wrap_upc = []
    dataAll.forEach(function (item, index) {
      const upc = transformData(item)
      wrap_upc[index] = upc
    })

    const match_post_user = mergedDobledata(wrap_upc[0], wrap_upc[1],  "idx_user", "id_users", "email")
    const match_post_nice = mergedDobledata(match_post_user, wrap_upc[2],  "idx_nice", "id_nices", "deskripsi")

    const fix_data = match_post_nice
    
    // const newData = Object.fromEntries(
    //   Object.entries(match_post_user).filter(([key]) => key !== "id_author")
    // );
    // const m_up = ignoreKeys(match_post_user)
    // console.log(newData);
  
    // console.log(wrap_upc);
    // setPosts(wrap_upc[0]);
    // setUsers(wrap_upc[1]);
    // setNices(wrap_upc[2]);
    setPUN(fix_data);

  }, [dataAll])
  

const AppName = import.meta.env.VITE_APP_NAME;

    
    const waktuSaatIni = new Date();
    const jam = waktuSaatIni.getHours();
    const menit = waktuSaatIni.getMinutes();
    const detik = waktuSaatIni.getSeconds();
    const waktuText = jam + ":" + menit + ":" + detik;

    // const rady_Posts = transformData(dataPosts);

  // const appNm = import.meta.env.VITE_APP_NAME;
  // const sheetId = import.meta.env.VITE_APP_SHEET_ID;
  // const credentialAPP = import.meta.env.VITE_APP_GOOGLE_APPLICATION_CREDENTIALS;

  return (
    <div className="mx-4 lg:mx-56 my-5">
    {/* <div className="mx-4 my-5"> */}

      <header className="rounded-lg bg-slate-200 mb-7">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> About </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Careers </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> History </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Services </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <h1>{AppName}</h1>

      <div className="flex gap-x-8 rounded-lg p-4 shadow-sm shadow-indigo-100 bg-slate-200 mb-5">
        <img
          alt="Home"
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-2/3 rounded-md object-cover"
        />

        <article className="flex bg-white w-1/3 transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className="aspect-square h-56 w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  Finding the right guitar for your style - 5 tips
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                atque dignissimos. Molestias explicabo corporis voluptatem?
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Read Blog
              </a>
            </div>
          </div>
        </article>
        
      </div>

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700"> Shirts </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700"> Plain Tee </a>
          </li>
        </ol>
      </nav>

      <section className="bg-gray-50 border-b-2 border-gray-200 pb-2">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Understand User Flow.
          <strong className="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
        </h1>
        <div className="flex items-center gap-x-6 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h2>{waktuText}</h2>

        </div>
      </section>

      <section className="mt-3">


        
        {/* {
          // dataAll.length > 0 && 
          dataUsers?.map((da) => {
            return (
              <div className="prose" key={da.id_users} dangerouslySetInnerHTML={{ __html: `${da.name}` }} />
            )
          })
        }
        {
          // Nices.length > 0 &&
          dataNices?.map((dn) => {
            return (
              <div className="prose" key={dn.id_nices} dangerouslySetInnerHTML={{ __html: `${dn.nice}` }} />
            )
          })
        }
        {
          // Posts.length > 0 &&
          <PostData data={dataPosts} />
        } */}
      </section>

      <section className="mt-10 flex flex-wrap gap-x-6 justify-center items-center">
        {dataPUN.length > 0 &&
          dataPUN?.map((da) => {
            return (
              <Link to={`/post/${da.id_posts}`} key={da.id_posts}>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg my-4 w-80" key={da.id_posts}>
                  <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                  />

                  <div className="bg-white p-4 sm:p-6">
                    {/* {console.log(typeofda.updated_at)} */}
                    <time className="block text-xs text-gray-500"> {humanDiffTime(new Date(da.updated_at), new Date())} </time>
                    <h3 className="mt-0.5 text-lg text-gray-900">{da.post_title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 prose" dangerouslySetInnerHTML={{ __html: `${da.post_content}` }}>
                    </p>
                  </div>
                </article>
              </Link>
            )
          })
        }
      </section>

    </div>
  );
}

export default App;
