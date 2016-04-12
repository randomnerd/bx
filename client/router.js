import Router from 'cerebral-module-router';

const router = Router({
   '/': 'page.home',
   '/admin': {
     '/': 'admin.home',
     '/currencies' : 'admin.adminCurrs',
     '/currencies/new' : 'admin.adminCurrsNew',
     '/tradepairs' : 'admin.adminPairs',
     '/tradepairs/new' : 'admin.adminPairsNew'
   },
   '/u': {
     '/wallets': 'u.wallets',
     '/settings': 'u.settings',
     '/password': 'u.password'
   }
});

export default router;
