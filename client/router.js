import Router from 'cerebral-module-router';

const router = Router({
   '/': 'page.home',
   '/bitindex': 'page.bitx',
   '/admin': {
     '/': 'admin.home',
     '/currencies' : 'admin.adminCurrs',
     '/currencies/new' : 'admin.adminCurrsNew',
     '/currencies/edit/:id' : 'admin.adminCurrsEdit',
     '/tradepairs' : 'admin.adminPairs',
     '/tradepairs/new' : 'admin.adminPairsNew',
     '/tradepairs/edit/:id' : 'admin.adminPairsEdit'
   },
   '/u': {
     '/wallets': 'u.wallets',
     '/wallet/:id': 'u.wallet',
     '/settings': 'u.settings',
     '/password': 'u.password'
   },
   '/pair/:id': 'pair.show',
   //'/mobile/:id':'mob.page'

});

export default router;
