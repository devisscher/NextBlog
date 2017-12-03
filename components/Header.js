import Link from 'next/link';

import glamorous from 'glamorous';

const Navigation = glamorous.nav({
  height: '50px',
  backgroundColor: '#9b4dca',
  paddingRight: '15px',
  paddingLeft: '15px',
  width: '100vw',
  '& .links': {
    maxWidth: '800px',
    margin: '0 auto'
  }
});

const Anchor = glamorous.a({
  marginRight: '10px',
  cursor: 'pointer',
  color: 'white',
  lineHeight: '50px',
  ':hover': {
    color: '#e1bee7'
  },
  '.active': {
    borderBottom: '2px solid white'
  }
});

const Heading = glamorous.h1({
  fontSize: '2.4em',
  marginTop: 10,
  color: 'red'
});

const links = [
  {
    name: 'TD',
    url: '/',
    slug: 'home',
    sub: [
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
        name: 'Tags',
        url: '/tags',
        slug: 'tags'
      }
    ]
  },
  { name: 'About', url: '/about', slug: 'about' },
  {
    name: 'Extras',
    url: '/extras',
    slug: 'extras'
  }
];

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 'home'
    };
  }

  componentDidMount() {
    let activeClass = location.pathname.split('/')[1];
    activeClass
      ? this.setState({ active: activeClass })
      : this.setState({ active: 'home' });
    console.log('the class:', activeClass);
  }
  render() {
    let activeClass = this.state.active;
    function LinkList(props) {
      const links = props.links;
      const listItems = links.map(link => (
        <span href={link.url} key={link.slug}>
          {link.sub ? (
            <span
              className="dropdown"
              style={{
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <Link href="">
                <Anchor className={activeClass === link.slug ? 'active' : ''}>
                  {link.name}
                </Anchor>
              </Link>
              <div className="dropdown-content">
                {link.sub.map((sub, index) => (
                  <Link href={sub.url} key={index}>
                    <Anchor
                      className={activeClass === sub.slug ? 'active' : ''}
                      style={{ color: '#9b4dca', display: 'block' }}
                    >
                      {sub.name}
                    </Anchor>
                  </Link>
                ))}
              </div>
            </span>
          ) : (
            <Link href={link.url}>
              <Anchor className={activeClass === link.slug ? 'active' : ''}>
                {link.name}
              </Anchor>
            </Link>
          )}
        </span>
      ));
      return <div className="links">{listItems}</div>;
    }
    return (
      <Navigation>
        <LinkList links={links} />
      </Navigation>
    );
  }
}
