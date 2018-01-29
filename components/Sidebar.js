import React from 'react'
import Link from 'next/link'
import glamorous from 'glamorous'
import Menu from '../styles/icons_react/Menu'
import X from '../styles/icons_react/X'

const Sidebar = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  left: 0,
  background: '#666',
  overflowX: 'hidden',
  transitionProperty: 'left',
  transitionDuration: '.5s',
  '.closed': {
    left: '-100%',
    transitionProperty: 'left',
    transitionDuration: '.5s'
  }
})
const SidebarClose = glamorous.div({
  zIndex: '1001',
  color: 'white',
  position: 'absolute',
  top: '10px',
  right: '15px',
  cursor: 'pointer'
})
const SidebarOpen = glamorous.div({
  zIndex: '1001',
  color: 'white',
  position: 'absolute',
  top: '10px',
  right: '15px',
  cursor: 'pointer'
})
const SidebarWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  '& img': {
    height: '100px'
  }
})
const SidebarTitle = glamorous.h1({
  color: 'white'
})
const SidebarMenu = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& a': {
    color: 'white',
    fontSize: '1.5em',
    fontWeight: 'bold'
  }
})

const links = [
  {
    name: 'Home',
    url: '/',
    slug: 'home'
  },
  {
    name: 'Projects',
    url: '/projects',
    slug: 'projects'
  },
  {
    name: 'About',
    url: '/about',
    slug: 'about'
  },
  {
    name: 'Extras',
    url: '/extras',
    slug: 'extras'
  }
]

export default class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    console.log('mounted')
  }

  handleClick(e) {
    e.preventDefault()
    const menu = this.state.menu ? false : true
    this.setState({ menu: menu })
  }
  componentDidMount() {}
  render() {
    function LinkList(props) {
      const links = props.links
      const listItems = links.map(link => (
        <Link key={link.slug} href={link.url}>
          <a>{link.name}</a>
        </Link>
      ))
      return listItems
    }
    return (
      <div onClick={this.handleClick}>
        <SidebarOpen
          onClick={this.handleClick}
          hidden={this.state.menu ? false : true}
        >
          <Menu className="icon" />
        </SidebarOpen>
        <SidebarClose
          onClick={this.handleClick}
          hidden={this.state.menu ? true : false}
        >
          <X className="icon" />
        </SidebarClose>
        <Sidebar className={this.state.menu ? 'closed' : ''}>
          <SidebarWrapper>
            <SidebarMenu>
              <LinkList links={links} />
            </SidebarMenu>
          </SidebarWrapper>
        </Sidebar>
      </div>
    )
  }
}
