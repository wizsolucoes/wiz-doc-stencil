import React, { useEffect, useState} from 'react'
import DocReact from 'components/DocReact/DocReact'


import './View-page.scss'

const ViewPage = (props: any) => {
  const SearchParams: URLSearchParams = new URLSearchParams(props.location.search)
  const [npm, setNpm] = useState<string | null>()
  const [tagComponent, setTagComponent] = useState<string | null>()
  useEffect(() => {
    // for(var key of SearchParams.keys()) {
    //   console.log(key)
    //   setkeysParams([...keysParams, key])
    // }
    setValues()
  }, [])


  const setValues = () => {
    if(SearchParams.has('npm')) {
      setNpm(SearchParams.get('npm'));
    }
    if(SearchParams.has('tag')) {
      const tag = SearchParams.get('tag')
      const tagDecode = tag ? decodeURIComponent(tag) : ''
      setTagComponent(tagDecode);
    }
  }
  return (
    <div className="ViewPage">
      <h2>Caminho view</h2>
      {npm}
      <code>
        <pre>
        {tagComponent}
          <DocReact />
        </pre>
      </code>

      {
        /*
        Adicione sua nova página no fluxo acima -> pages/View/index.tsx
        ---
        import ViewPage from 'pages/View/View-page/View-page'
        ---
        Adicione o caminho da sua url exemplo: path="/View"
        <Route path="/View/" component={ ViewPage }/>
        */
      }
    </div>
  )
}

export default ViewPage
