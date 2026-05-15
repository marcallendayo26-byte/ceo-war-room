import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Upload, X, FileText, Type } from 'lucide-react'
import { exportData, importData } from '../lib/storage'
import { downloadCasesPDF } from '../lib/generatePDF'
import { FONT_SIZES, getFontSize, setFontSize } from '../lib/prefs'

export default function SettingsPanel({ onClose, legacyMode = false, onToggleLegacy }) {
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
        alert('Restore failed — the selected file is not a valid InnoFac Acumen backup.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const [currentSize, setCurrentSize] = useState(getFontSize)

  const handleFontSize = (id) => {
    setFontSize(id)
    setCurrentSize(id)
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

          {/* ── Legacy Mode ─────────────────────────────────────────────── */}
          <div className="mb-5 pb-5 border-b border-white/6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-semibold">Legacy Mode</p>
                <p className="text-slate-500 text-[11px] mt-0.5">No retry. Permanent scars. Every decision counts.</p>
              </div>
              <button
                onClick={onToggleLegacy}
                aria-label={legacyMode ? 'Disable Legacy Mode' : 'Enable Legacy Mode'}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
                  legacyMode ? 'bg-red-500' : 'bg-white/12'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    legacyMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            {legacyMode && (
              <p className="text-red-400/70 text-[10px] mt-2 font-medium">
                ⚡ Active — wrong answers leave permanent scars. No retry available.
              </p>
            )}
          </div>

          {/* ── Font size ───────────────────────────────────────────────── */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Type size={12} className="text-slate-500" />
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Text Size</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {FONT_SIZES.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleFontSize(id)}
                  className={`py-2 rounded-xl border text-sm font-semibold transition-all ${
                    currentSize === id
                      ? 'border-brand-500 bg-brand-500/15 text-brand-400'
                      : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Case library ─────────────────────────────────────────────── */}
          <div className="space-y-2 mb-5">
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

          {/* ── Progress backup ──────────────────────────────────────────── */}
          <div className="space-y-2">
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
