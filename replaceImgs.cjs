const fs = require('fs');
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
let serv = fs.readFileSync('src/pages/Services.jsx', 'utf8');

const logoStr = 'https://lh3.googleusercontent.com/aida/ADBb0uh0eVjge9YPXSncxQEnyYrRgYMXoLRpHbyOdtd335A1HuGAXTwnTAZXq5htSmVxWLUnfTqOuD2dvmW6d7nEc6D0uKtO_kzDN7OY7NckIdjfuae8xBCfxSWawT2bmWtKrRMennlx_lor5Xq5kQusJAgQiqrxmqGMMy7kUvdYshyfUa7q2wpJXpfwgbMW9fMxJ0gSOjRBCKxEsQy5OXSgwAg3F-MGxxu4uXncceDEmQOAI1a2wsSG1DPvN32JeO66ovcGTVVHQzwEVHs';
home = home.replaceAll(logoStr, '/Logo_sangabriel_d_original.png');
serv = serv.replaceAll(logoStr, '/Logo_sangabriel_d_original.png');

// Plan 1
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0uhjffk_vRY_aNmJ6mC9EWCQAcjqX1LNfMij3jEnsYZAj-g9mH25jdzGwHJi8KSyyr_r-J_2KCPhvaIECNLzY-KBRqLuCAhRbcMXW9oemhO7VoyztLCFzFTK6j0Yhd3TEMEj3oLe-xtKvNvd26VWOgp--NI3Os5XT7-KyG73IYOnJ5CcSjAymdVWxbV_ool9LyXiBMzjtwW7qLHAcsB4Y5iE5JH-Ikp1Af9eOUmTGCIHwyJf8w0Cppm1UIK9zQ-VybsZFS08JB_3zgo', '/tradicional_a.png');
// Plan 2
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0uhka3zixCTkuHxo7nNsGx6GxA866jYZL8IMxYWqnvAIDTxkKLY9TeWGAsMFluVMn-aXdoGNqea4hRV4QU27dWj8uj_1dqI8I19EkUPKb_FG6QFOZD-d7J4q9XaBFpeGmqSNDuWuRSim08yT3zr7621l7DAdWQsb7kwxJPNiSe3cRU9BCj1zhHdPyGACI7L_pXtck2k-aWYnZ_zZIjPdsNddNIw2O2-cktiHInU-Iq1zFDjnbVqFtt6y1GWssBSWpy527TsZzMVSQPo', '/tradicional_b.png');
// Plan 3
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0ujtVsNbI7HyCtzWJNnPR8FCrLwZ5YdSnqtT46wWanH982eR_MJ_wxQsYmgzpTAg0JeYDW2NXXNIZ2QFOqS5wn6T9wNvuh4G0jPlI4qo-y4gtOXMR7GLg3-vO8mvlJFwW6-IbVswTEp9Ttt6muAP3ENVGFL3Y2zZqxh8SGRgn4KnLHkajDzRvszYZv4uVKTvrLEHPO6kHhYYuZ9zOl6UGZ4mGgPUOlqk27mCqeJkzIZ40RpnsrgtdNfaQXkIL6BSC7HI3UYArY5c-1s', '/estandar_a.png');
// Plan 4
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0uhZbCo8xRbOSH0CnZ1yocdnGH5EYknJdZ3gUbA0x6x48CyF1zMZtdSv3GEO17G-cXbOcKw48iVoC4xD1FApm_abz5hnUmNOCAPItkysChs4jJPGiygr1DqF1WkmVF_hrx2Cn2s0Vugzn2TC_AoJEuLpJHd0uWA6Clm2702lyMir1CqxG-nvjWjJpYSw4kGDyX8o0aoGdojVOF8N_zrNKCyY_VBfzBv_Emtselx_SWTJfs7aNCpTH_vJrPnov2FIYcJQv06kNxYALqM', '/estandar_b.png');
// Plan 5
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0uglOBEAyjutL13iTUOU2uInDk3-3il3Ikr0Y0tXxtYCyDWL_9X-5J9tfPjDYvloIUlRpZuHFvaItK4Lsk1vXybyRlNYi94kW_8MurIWfLj5PgUFIYHE2gNCDAFNVc0SAHQy38MJqgokZoTciMx98nFGtMSaQFKtdzoKeo6e6iuP9VMYxgMHalgSNdDhcrfID66kEjNp6SaD2Ibb69xoOYkLxQP8sXe6N1F44VE5-14AJC3GCggyvqFsYNKhJExOWcfaGokGGKEumT8', '/selecto_a.png');
// Plan 6
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0ui-snNneFdCufkblvMR0Em2AM90AGh-uXBV6YIt8vHK_3T9jvcvdhRbkHICbj4rdCfOzEF3TWnfZdenLFiQ3G1Co9yybRTbedjfuRYicPT5xfxDBOft30kRgikMQ92yzN-vqL_4cgXS6OECNNDhTRDoTcyNwqn4OLlXt5FWPGEumwu5e4VBwONJv7qL2Rh_b5UJCHirTWLs-GdSPC1ph4FG2g2xro40Yfo5gqlHSEb-CA-2reVWXE_0CY_-K_QcDfX27FguiQxGcg', '/selecto_b.png');
// Plan 7
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0uiiM3s5O0Hnfw0RdCzrZu8c1yxNOYW826Q7ligYA0RBm__Dq63c0fFKilmPH88abCU5Lskn2AGpkE6rsqUL8OAfyxBqOnl5SRJdDR-nREgnaKdTAfd2Bvi3k51BHgpnJLOviSF92FRzf_mFrMKLpxUmV2F61g2645frRvwY_36HI1q5Gybo3J9MiUxpuXjGpMUZVk1WVOOlKo0wxGK5GOOpJWlC-Uukx2LIh9L-tpuiKpJZ5cBEhPHmcP05pem0G2cbFKg4rTGmzL8', '/superior_a.png');
// Plan 8
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0uhhM54GrlQktbT55JBkYxErVIPbaZDmGyPEYD3nzTZpSXVYA7HqkoymeHo9pVgnMaFPByyAw6rQpgAaR7NJNZuyN-T-lfZFbgvdEr_9lHRboT2-2rs3r9g2vaAbUVGdjYKll3TdpHFRagUh9wnNchbVqrr2FtGmRpM6VLtJV4FoaAUuNBRE1XBAZOFAleZs72oMarCnHlPk58c7drkAfNedNw8NejWlpMx0Ra-CtxcsJlORCoqXUDW-wVaUkLqQ1KUqpr4bSLpIAw', '/superior_b.png');
// Plan 9
serv = serv.replace('https://lh3.googleusercontent.com/aida/ADBb0ujqahQvvOSl9ZoBpg_VsRRZV4juPtqs3dHx0RxTc8kUHEZHgPmbb014_nKcl61zfwdEsqAreQ_2nagsY8eomyrr4VSzgoAyAFYXZX4cTocyt9nQBGdz8wu6-_IzfHQS-leSfJM7j4AXYZfR8MkRaU4wrjuOjqm5lO0YxAFPAjKvVioR8L3k7vMUidSkaDuCvyX5PU1sKKb56_pZfpZfhcEOaVW3-h9PEBJz45svBC_hT27s7rVGeAeycSUo-hopOE0mfbZ86x_EIOo', '/superior_c.png');

fs.writeFileSync('src/pages/Home.jsx', home);
fs.writeFileSync('src/pages/Services.jsx', serv);
