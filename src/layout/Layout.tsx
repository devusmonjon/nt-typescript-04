import { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

export default class Layout extends Component {
  render() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
      </div>
    )
  }
}
