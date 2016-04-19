import Router from 'cerebral-module-router';

const router = Router({
   '/': 'page.home',
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
     '/settings': 'u.settings',
     '/password': 'u.password'
   },
   '/pair/:id': 'pair.show'
});

export default router;
