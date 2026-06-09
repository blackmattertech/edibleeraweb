import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { InsightSlugPage } from './pages/InsightSlugPage'
import { InsightsPage } from './pages/InsightsPage'
import { MarketIndiaPage } from './pages/MarketIndiaPage'
import { MarketNepalPage } from './pages/MarketNepalPage'
import { MarketsPage } from './pages/MarketsPage'
import { ReportDetailPage } from './pages/ReportDetailPage'
import { ReportsPage } from './pages/ReportsPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="insights/:slug" element={<InsightSlugPage />} />
        <Route path="markets" element={<MarketsPage />} />
        <Route path="markets/india" element={<MarketIndiaPage />} />
        <Route path="markets/nepal" element={<MarketNepalPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="reports/:slug" element={<ReportDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
