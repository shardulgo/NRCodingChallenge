class Table extends React.Component {
  render() {
    return (
      <table className='table-striped table table-bordered table-hover'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jeremy</td>
          <td>Google</td>
        </tr>
        <tr>
          <td>Dave</td>
          <td>Amazon</td>
        </tr>
        <tr>
          <td>Abigail</td>
          <td>New Relic</td>
        </tr>
        <tr>
          <td>Steve</td>
          <td>Bloomberg</td>
        </tr>
      </tbody>
    </table>
      );
  }
}
