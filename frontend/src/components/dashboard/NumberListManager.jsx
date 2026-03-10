import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Plus, Trash2, CheckCircle, XCircle } from 'lucide-react';

/**
 * Reusable number list manager (whitelist/blacklist) - Professional Corporate Style
 */
export const NumberListManager = ({
  items,
  onAdd,
  onRemove,
  type = 'whitelist',
  title,
  phonePlaceholder,
  labelPlaceholder = 'Label (optional)',
  testId
}) => {
  const [newNumber, setNewNumber] = useState('');
  const [newLabel, setNewLabel] = useState('');

  const isWhitelist = type === 'whitelist';
  const config = isWhitelist ? {
    title: title || 'Whitelist (Always Allow)',
    icon: <CheckCircle className="h-6 w-6 text-emerald-700" />,
    buttonColor: 'bg-emerald-700 hover:bg-emerald-800',
    itemBg: 'bg-slate-100 hover:bg-slate-200 border border-slate-300',
    phonePlaceholder: phonePlaceholder || 'Phone number (e.g., +12125551234)'
  } : {
    title: title || 'Blacklist (Always Block)',
    icon: <XCircle className="h-6 w-6 text-red-700" />,
    buttonColor: 'bg-red-700 hover:bg-red-800',
    itemBg: 'bg-slate-100 hover:bg-slate-200 border border-slate-300',
    phonePlaceholder: phonePlaceholder || 'Phone number (e.g., +18005551234)'
  };

  const handleAdd = () => {
    if (newNumber) {
      onAdd({ 
        phone: newNumber, 
        label: newLabel || 'Unlabeled', 
        addedDate: new Date() 
      });
      setNewNumber('');
      setNewLabel('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6" data-testid={testId}>
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        {config.icon}
        {config.title}
      </h3>
      
      <div className="mb-6 space-y-3">
        <Input
          placeholder={config.phonePlaceholder}
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          className="border-slate-300 focus:border-slate-500"
          data-testid={`${testId}-phone-input`}
        />
        <Input
          placeholder={labelPlaceholder}
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          className="border-slate-300 focus:border-slate-500"
          data-testid={`${testId}-label-input`}
        />
        <Button
          onClick={handleAdd}
          className={`w-full ${config.buttonColor} text-white`}
          data-testid={`${testId}-add-btn`}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to {isWhitelist ? 'Whitelist' : 'Blacklist'}
        </Button>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div 
            key={item.phone} 
            className={`flex items-center justify-between p-3 ${config.itemBg} rounded-lg transition-colors`}
            data-testid={`${testId}-item-${item.phone}`}
          >
            <div>
              <p className="font-semibold text-slate-800">{item.label}</p>
              <p className="text-sm text-slate-600">{item.phone}</p>
            </div>
            <button
              onClick={() => onRemove(item.phone)}
              className="text-red-700 hover:text-red-900 transition-colors"
              data-testid={`${testId}-remove-${item.phone}`}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-center text-slate-500 py-4">
            No numbers added yet
          </p>
        )}
      </div>
    </div>
  );
};
