import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch, Redirect } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import DetalleIniciativa from "./detalleIniciativa/DetalleIniciativa";
import Organizaciones from "./organizaciones/Organizaciones";
import Eventos from "./detalleIniciativa/Eventos";
import QuienesSomos from "./home/quienessomos";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";

function Routing(props) {
  const { blogPosts, selectBlog, selectHome, selectQuienesSomos} = props;
  return (
    <Switch>
      {blogPosts.map(post => (
        <PropsRoute
          /* We cannot use the url here as it contains the get params */
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.imageSrc}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(blogPost => blogPost.id !== post.id)}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      )
      <PropsRoute path="/inicio" component={Home} selectHome={selectHome} />)
      <PropsRoute path="/iniciativa" component={DetalleIniciativa} />)
      <PropsRoute path="/organizaciones" component={Organizaciones} />)
      <PropsRoute path="/eventos" component={Eventos} />)
      <PropsRoute path="/QuienesSomos"
                  component={QuienesSomos} 
                  selectQuienesSomos={selectQuienesSomos} />)
      <Redirect from='*' to='/inicio'/>
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectQuienesSomos: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired
};

export default memo(Routing);
