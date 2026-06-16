import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'

const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })),
)
const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const InsightSlugPage = lazy(() =>
  import('./pages/InsightSlugPage').then((module) => ({
    default: module.InsightSlugPage,
  })),
)
const MarketIndiaPage = lazy(() =>
  import('./pages/MarketIndiaPage').then((module) => ({
    default: module.MarketIndiaPage,
  })),
)
const MarketNepalPage = lazy(() =>
  import('./pages/MarketNepalPage').then((module) => ({
    default: module.MarketNepalPage,
  })),
)
const MarketsPage = lazy(() =>
  import('./pages/MarketsPage').then((module) => ({ default: module.MarketsPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })),
)
const ReportDetailPage = lazy(() =>
  import('./pages/ReportDetailPage').then((module) => ({
    default: module.ReportDetailPage,
  })),
)
const ReportsPage = lazy(() =>
  import('./pages/ReportsPage').then((module) => ({ default: module.ReportsPage })),
)
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((module) => ({
    default: module.ServiceDetailPage,
  })),
)
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })),
)

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="insights/:slug" element={<InsightSlugPage />} />
          <Route path="markets" element={<MarketsPage />} />
          <Route path="markets/india" element={<MarketIndiaPage />} />
          <Route path="markets/nepal" element={<MarketNepalPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="reports/:slug" element={<ReportDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
