export function Gallery() {
  return (
    <section className="py-24 bg-surface-container-low" id="galeria">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-extrabold text-primary leading-tight">Resultados que hablan por nosotros</h2>
            <p className="text-xl text-on-surface-variant">Transformaciones reales creadas con precisión clínica y sentido estético.</p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <span className="block text-3xl font-extrabold text-secondary font-headline">500+</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Sonrisas</span>
              </div>
              <div className="w-px h-12 bg-outline-variant"></div>
              <div className="text-center">
                <span className="block text-3xl font-extrabold text-secondary font-headline">15</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Años Exp.</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img className="rounded-2xl w-full h-64 object-cover ambient-shadow" alt="Close-up of a perfectly aligned and bright smile showcasing professional dental cosmetic work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfGo6arqrcnsaXJ8Vky1hXGKvc4esMhvJOr4APg1R3q643Ht_-EZIs8eG7yjObculB-uVEFXAziw_5pTDfqIHdUpK8XgGaCMPqARvs928ZnXXQ2exP5MFWUgHfXCh06ZWPoUyTdMYZMfUfKC1bJu-If30_xsZnx3jNl1x42DsX-OkFtDCT9EQrIUx07tuCz3rc7hulUzHVhG4kB8vpJjkLCUeuu9hKxq7m6pUZjHFMoGd7-lP-1QHR6UF4Rw5psz0jXjWzWaWbI_Br"/>
              <img className="rounded-2xl w-full h-48 object-cover ambient-shadow" alt="Dental patient smiling confidently after receiving treatment in a high-end dental clinic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMVG6nliIVkcJhq7vtp1OcS_d90p6Pp3ae7qDqgp_37vVDpbN7XSPPUPgJPMck2rVgvawcoj0R-Wya3xW-n-_atjpZ8nXCXzZv-634JXFg2QeXPLTbRLfJeBA7wlOxgvhgiZWV4URGzuefUn1-0i_0lckgIjgBo3qtj9KfHsneB9EgVHgLUr6cDCo-q-vaMm9vi_8TvIyBQyrRr66LY6MedJIXU1_vzQa3JCbKFX3T_rHK-PSqduBxIdBux6J2Qv-00kAAhQn4NS8X"/>
            </div>
            <div className="space-y-4 pt-8">
              <img className="rounded-2xl w-full h-48 object-cover ambient-shadow" alt="Dentist performing a checkup with professional lighting and surgical precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC03h_fd1QxhYGsuNO0_2PvaPLYpx4Cs-A5n5SUOL2tAVeU2XJ0K5y0qiyjk3gZ8W2SiSPW46GxxTkzhiaTskWvdv1D5Lh-XYtl0cHFDSPsJAPMofb_Di6DhiyiK0Ake0mAf4y_0DJzFqVhikP2KQ-kgKFnYv9HSvFzAwCVwyR9HR3ztfXI669YxVmB72wNYSF7WJmsMvBhRCwAKSrzz6pNPTPy62-eXBtRFn6v0BR-voGOREc3Z6ii2jIHX_y3xeFwTs1mqh0HKW0"/>
              <img className="rounded-2xl w-full h-64 object-cover ambient-shadow" alt="Advanced dental technology and clean sterile tools in a modern medical office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFct321WDvy2XYrGS9cFoVhF08Eotz6oU0_AXYMnoipAM9qVce4lRac8sq9FmwkAKkcmKiBFjt3i823APetxUhB1J_aafXi8c_2fxN5Liigr7GKWCyLt2w6547bx7Du2PkqImolyrGEFAJ_7e9uzLv-blVyLPnUCexrTdNRa0WhT0yj8j72fpFLmipPBnuVTAbCxrmvkaa2E9cT6G5bM9vyUiTBqfkUt53Xbh6CWCAtr9c1eUPaZWbsysTDq0aEKQXXprWBGKx9LKK"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
