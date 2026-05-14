import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Upload, X, FileText } from 'lucide-react'
import { exportData, importData } from '../lib/storage'
import { downloadCasesPDF } from '../lib/generatePDF'

export default function SettingsPanel({ onClose }) {
  const fileInputRef = useRef(null)

  const handleExport = () => exportData()

  const handleImportFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const ok = importData(ev.target.result)
      if (ok) {
        window.location.reload()
      } else {
        alert('Restore failed — the selected file is not a valid CEO War Room backup.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: 'rgba(7,15,28,0.88)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-navy-800 border border-white/12 rounded-3xl p-6 w-full max-w-xs"
          onClick={e => e.stopPropagation()}
        >
          {/* Hidden file input for restore */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={handleImportFile}
            aria-hidden="true"
          />

          <div className="flex items-center justify-between mb-6">
            <p className="text-white font-black text-lg">Settings</p>
            <button
              onClick={onClose}
              className="text-slate-600 hover:text-slate-300 transition-colors p-1 rounded-lg"
              aria-label="Close settings"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Case Library</p>

            <button
              onClick={downloadCasesPDF}
              className="w-full flex items-center gap-3 bg-white/4 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/25 transition-colors">
                <FileText size={16} className="text-gold-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Download case library</p>
                <p className="text-slate-500 text-[11px] mt-0.5">All questions &amp; answers — save as PDF</p>
              </div>
            </button>
          </div>

          <div className="space-y-2 mt-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Progress Backup</p>

            <button
              onClick={handleExport}
              className="w-full flex items-center gap-3 bg-white/4 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/25 transition-colors">
                <Download size={16} className="text-brand-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Download your progress</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Saves a backup file to your device</p>
              </div>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center gap-3 bg-white/4 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/25 transition-colors">
                <Upload size={16} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Restore from backup</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Load a previously saved backup file</p>
              </div>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
