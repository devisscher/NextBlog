import React from 'react';
import glamorous from 'glamorous';


const List = glamorous.ul({
  listStyle: 'none',
  position: 'relative',
  left: '50%',
  fontSize: '1rem',
  textAlign: 'center',
  listStyleType: 'none',
  float: 'left',
});
const Li = glamorous.li({
  float: 'left',
  '& a': {
    paddingRight: '3px',
    paddingLeft: '3px',
  },
});
const Butt = glamorous.div({
  display: 'inline-block',
  fontWeight: 500,
  textTransform: 'uppercase',
  padding: '0px 0px',
  '& .github': {
    color: '#fff',
    textDecoration: 'none',
    background: '#28a745',
  },
  '& .twitter': {
    color: '#fff',
    textDecoration: 'none',
    background: '#1da1f2',
  },
  '& .linkedin': {
    color: '#fff',
    textDecoration: 'none',
    background: '#0073b1',
  },
  '& .instagram': {
    color: '#fff',
    textDecoration: 'none',
    background: '#bc2a8d',
  },
  '& .strava': {
    color: '#fff',
    textDecoration: 'none',
    background: '#fc4c02',
  },
  '& .email': {
    color: '#fff',
    textDecoration: 'none',
    background: '#dd5347',
  },
  ':hover': {
    transform: 'scale(1,1.2)',
  },
});
const Footer = () => (
  <footer
    style={{
      textAlign: 'center',
      left: 0,
      bottom: 0,
      width: '100vw',
    }}
  >

    <hr />
    <p>
      <small>
        <strong>
          Written by Thomas Devisscher who lives and works in Ottawa, Canada
          building JavaScript and Python things. You should follow him.
        </strong>
      </small>
    </p>
    <div
      style={{
        float: 'right',
        position: 'relative',
        left: '-50%',
        textAlign: 'left',
      }}
    >
      <List>
        <Li>
          <Butt>
            <a className="github" href="https://github.com/devisscher">
              Github
            </a>
          </Butt>
        </Li>

        <Li>
          <Butt>
            <a className="twitter" href="https://twitter.com/devisscher">
              Twitter
            </a>
          </Butt>
        </Li>
        <Li>
          <Butt>
            <a
              className="instagram"
              href="https://www.instagram.com/tdevisscher/"
            >
              Instagram
            </a>
          </Butt>
        </Li>
        <Li>
          <Butt>
            <a
              className="strava"
              href="https://www.strava.com/athletes/1931557"
            >
              Strava
            </a>
          </Butt>
        </Li>
        <Li>
          <Butt>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/devisscher/"
            >
              Linkedin
            </a>
          </Butt>
        </Li>
        <Li>
          <Butt>
            <a className="email" href="mailto:thomas@devisscher.ca">
              Email
            </a>
          </Butt>
        </Li>
      </List>
    </div>
  </footer>
);

export default Footer;
