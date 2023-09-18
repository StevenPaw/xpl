import Navigation from './navigation'
import TopBar from './topbar'
 
export default function Layout({ starturl, user, children }) {
  return (
    <>
      <TopBar starturl={starturl} user={user}/>
        <main user={user}>{children}</main>
      <Navigation user={user}/>
    </>
  )
}
