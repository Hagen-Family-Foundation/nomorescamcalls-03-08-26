import React from 'react';
import { Button } from '../ui/button';
import { Download, FileText } from 'lucide-react';

/**
 * Reusable export buttons component - Professional Corporate Style
 */
export const ExportControls = ({
  onExportCSV,
  onExportPDF,
  isExporting = false,
  showCSV = true,
  showPDF = true,
  csvLabel = 'Export CSV',
  pdfLabel = 'Export PDF',
  testId = 'export-controls'
}) => {
  return (
    <div className="flex gap-2" data-testid={testId}>
      {showCSV && (
        <Button
          onClick={onExportCSV}
          disabled={isExporting}
          variant="outline"
          className="border-slate-400 text-slate-700 hover:bg-slate-100"
          data-testid="export-csv-btn"
        >
          <FileText className="h-4 w-4 mr-2" />
          {isExporting ? 'Exporting...' : csvLabel}
        </Button>
      )}
      {showPDF && (
        <Button
          onClick={onExportPDF}
          disabled={isExporting}
          variant="outline"
          className="border-slate-400 text-slate-700 hover:bg-slate-100"
          data-testid="export-pdf-btn"
        >
          <Download className="h-4 w-4 mr-2" />
          {isExporting ? 'Exporting...' : pdfLabel}
        </Button>
      )}
    </div>
  );
};
