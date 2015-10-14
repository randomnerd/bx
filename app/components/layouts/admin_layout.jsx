import React from 'react';
import TopMenu from 'components/top_menu';
import AdminOnly from 'components/admin/admin_only';
import AdminSidebar from 'components/admin/sidebar';

export default React.createClass({
  render() {
    return (
      <AdminOnly redirect='/'>
        <div>
          <TopMenu />
          <div className='ui main container'>
            <div className='ui grid'>
              <div className='four wide column'>
                <AdminSidebar/>
              </div>
              <div className='twelve wide column'>
                {this.props.content}
              </div>
            </div>
          </div>
        </div>
      </AdminOnly>
    );
  }
});
