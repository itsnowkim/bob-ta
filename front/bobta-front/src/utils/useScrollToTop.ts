import {useEffect} from 'react'
export const useScrollToTop = () => {
  useEffect(() => {
    console.log('scroll to top')
    window.scrollTo(0, 0)
  }, [])
}
