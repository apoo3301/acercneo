"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Kira = () => {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    // Génère des caractères aléatoires pour l'effet énigmatique
    const generateRandomCharacters = () => {
      const charSet = 'human-performance-safety-training-that-works.mp3';
      const randomChars = Array.from({ length: 100 }, () =>
        charSet[Math.floor(Math.random() * charSet.length)]
      );
      setCharacters(randomChars);
    };
    generateRandomCharacters();
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen font-warang">
      {/* Image et paragraphe centrés */}
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <Image alt='path' src="/path.png" width={300} height={300} />
        <p className="text-center text-white mt-4 text-xl font-bold">
           z̶̢̢̡̢̢̢̨̨̡̨̛̛̛̛̛̻̦͓̣̹͍̳͈̟͉͇̼̮̪͓͎̣̫̼͎̫̰͔̤̞̙̲͓̼͓̘̣͇̜͔̟̭̰̼͎̰̣̺͙̞̻͔͖͉̞̮͓͖̖͇̮̘̞̝̣͈̝͉̤̘̝̭̣͎̫͙͖̪̬͕͍͓̥̮̦̳͈͈̘̥̥̥͓̗͓̰̰͉̭̩̥̰͉̩̻̘̻̝̞̹̪͈̜͇͈͔͔̖̬͈͇̳͉̼̙̝͉̻͖̘̼̹̟̤̼̥͎̖̫̟̹̩̩͉͕̞̯̼̥̮̱̞̲͖͕̠̭̟̖͙̫̲͓̤͍͖̗̼̻̤̝͉͇̪̤̪̭̪̲̤̟͚͇̰̻̭̯͔̫͔͕͕͍̱͂͐́̌̀̒͊̾͋̈͌̽͛̑̏̉͌̎̐̈́̂͑̈́̊̔̐̓̓̃͑̑̎́̇͋̉̇͒̈́́̾̀͑̔̌̅̆̈́̿̎̈̒̿͗̉̎̓͒̊̓̽̒͂͋̈́̑͋̉͋̌́̊̎͐̈́̊̍̈́͌͐̿̇̎̆́̂͂͒͒̒̂̇̾̋̃̀̅͆̇̎̀͑̈́͒̏̈́̍̽̂̇̃̌̍̕̚̚̚̚͜͜͜͠͠͝͝͠͝͝͠͠͝͝͝ͅͅͅͅǎ̸̧̧̧̡̨̧̨̨̢̨̡̧̠͔͎̮͕̘̤͉͉͖̭͉̥͉̻̼͈̮͓̗̗̫̘̣̭͈͖̱̼̟̗̝̩̫͔̻̮̘̳̤̰͓͕̦̺̱̻̟̜̹̘̹̫̭͈͙̖̭̞̠̱̠̼̗͉̥̭͙̣̩̖̲̬͕͇̩͔̩̱̲̻̞̤̟͖͙̝̞̹̲̰͈̠̰̳̭͕̮̭̟͚̟͇̲̲̞͇̹̬̯̮̟͙̞͚̻̞̮̗͎̣̤͕̘̤̯̍̐̈́́̽̈́̂̒̏͑̒̈͌̃̚̕͜͜͝ͅͅͅͅͅz̸̨̢̧̨̡̨̡̡̢̧̢̨̢̨̡̛̛̛̛̛̩̗͚̦̝̼̭̯̹̪̩̭̜͎̣̬̦̳̟̗̦̝̝͔̘̼̘̺̙̖̠̹͍͖̼͉̝̰̣̦̠̥̼̰̲̦̟̤̤̺̹̻̘͙͚̥̩̗̦̙̣̟͓̘̰̠̪̝͖̰͓̻̱̲̬͉̪̫̞̩͙̟̜̥͚̥͕̖̬̦͉̭̹̥͇̖̳̫͉̳̖͓̳͚̠̝͔͈̹̥̣͖̪̫̖͇̩͓̙͉̭̲͓͈̥̮͎̭̤̼͙̙͖̪̙̬͎̠͍̰̹͚̲͖̗̦̗͇̪̹̤͓̩̬̹̘̣̖̯͓͉̪̹̀͑̆̀̋͂̈́̉̓̏̏̽̎̅̒̃̒̅̏̃̈̽͌̑̐́̿̔͂̔͐͒̎̍́͑̒̾̔̌́̍̐̓̊̈́̑͂̈̉̀̓̓́̑̍̈́͛̔̿́̓̃͐̌͌̉͑̽̅̀̉̀́́͋̈̒̋̅̉̓̽͌̇͑̈́̋͆͂̌̀͒̅̈́̽̾͛͌̃̒͌́̾̀̐̃͊̅̅͆̋͛̏̽̃͑̔̎͒̍̔͊͗̀͊͒͌̊̆͂̑͘̚̕̚̕͘̕̕͜͜͜͝͝͝͠͝͠͠͝͝͝͝ͅͅͅͅą̶̡̢̧̡̢̢̨̢̨̢̨̢̨̨̡̧̧̧̡̡̡̛̛̛̛̛̛̛̛̥̬͕͚̹͇̲̥̫̜͇͖̬͇̟͓̜̮͇͙̙̻͖̳͇̪͔̙̥̝̱̱̪̼̗̙̝̯̙͉̰͍͓̰̖̙̬̣̱̺̫̪̖̘̙̜̬͚̫͔̰̳͈̭̹̜̘̹͖̜̯̠̞̠̹͇̦̞͚̲̖̬͔͖͕͉̣̗̤̩̩̗͙͚̱̭̗̣̭̦͚̣̳̘̗͕̮̜͔̰̜̜̗͓̺̫̥̰̫͎͖̦͈͔̗͕̣̞̭̬͖͍͓̲̤͔̰͇͎̞͕͚̘̪̰̘̲͎͖̭̤͉̞͍̬̻͕͇͇͈͕̫̟̺͎̖̠̭̺̞̙̠̻̹̻̝̣͚̟̟̭̠̙̲̰̬͔̝̝̳̠̜̩̱͙̙͍̼̲̲̣͎͙̼̳̮̪̘̩͕̟̜͔̙̙̘̜͉͈̞̣͈͎̣̎͂̒̂͐̇̔̎̄̀̿̓̅͆̍̆̑͋̇̐̀̾͆̐̆̌̌́́̈́̓͋́̐͌̈́̋̆̓͐̈̎̾̌͗́͑̏͛̾́̄̑̎̄̃̓̅́̒͆̆́̾̉̏͆̅̄̍̿̅̀͋͛̾͆͌́͋̈́̾͂̑̆͐̑̈̇̇̋̾̀͆̇̾͑̐͆̇͌̏́́̃̀͐̌̄́͂̋̅̒̒́̀̅͗̽͗̎́̈̈̾͊̈͑́́͆̊͌̓̋̾͂̾̉̈̓̓̀̆̌̊̃̍̔͗̑̓͒͛̑͌̒̂͑̓̎̍́̈́̈́̏̏̀̉̿̃̀̏͑̒̽̆͒̽͐͌̓̆͐̈̑̀́͗̅̆̿̈̈̀̂͆̉̅̑͛͑̇̀̉̚̕͘̕͘͘͘͘̚̕̕̕̕̕̚͘͜͜͜͜͜͝͝͝͝͠͠͝͝͝͝͠ͅͅͅͅͅͅz̷̨̢̢̡̨̨̡̢̧̡̨̛̛̛̛̛͚̰̟̼͕͖͖͚̮̟͚̗̼̝͔̥͓͙̙̪̭̥̲̳̜̺̜̬͉͍͉͍̭͙̖̪̹̗̞̦̰̜̖͕͈͖̹̟̘͍͕̙̮̲̭̠̺͙̣̱̬͔̯̣̬͕̙̪̟̼̘̼̲̦̠̮͔̳͈̤̘̖̻͍͈̦̹͇͖͍̼̣͖͔̞͎̗̰͍̳̩̱̦̤͓͕̣̲̘͓̠̙͌͒̃̇͋̿͑̋͌̀̃̏̐̎̾͊̒͂̑̃̉̃̓͋̀͂̆̒̎͆̑̎͗̽͐̃̉̽̽́̓̌̑̾̿̌̓͗̔̓̋̓̽̓̑̀̉̄͊̏̌̈̈́̓̃͂͋͑̄̇̿̉̇́́͑̃́͊͌̏̌̓̀̃͊̀͆̑̑̐͂̃͒̒̊͌͛̓͗̅͌͐̐̇̿̓͊͛͋̉͒̉͊̍͆̾̅͛̒̋̀̄̄̄̓̐̈́́̆̑̊̔͑̀̊̃̏̈́̈́̀͐͋͑̂̈́̿́͗̋̿͗́̀͋͐̉͛̿̅͗̓͒̂́̓̂̈̍͊̀͂̏̾̐̉̈́̍̎̀̏̈́͛̚̚͘̕̚̕̕̚͘̚͘̕͜͜͝͝͠͝͝͠͠͝͠͝͠͠͝͝ͅͅa̴̡̨̨̧̢̨̡̨̧̢̡̡̡̡̡̛̛̛̛͖̣͖̰̣̯͙̬͚̻̫̘̞̺̖̩͍̗̺͕͈̞͍̳̘̫̺̝̲̗̮̤̪͈̘͈̻̻̺͕̦͇̝̺͈̳̗̲̮͉͕̻̜͔͖͖͉͍̙̘̙̝̗̭̩̲̳͇̱͙̱͉͉̮̪̩͓̺̖͍͚̫͇̭͓͙̖͓̟̳̹͖̫̩̖̺͙̞̭͓͍͉͓̪̘͖͉̗̜̖̻̬̥̼̼̞̳̘̠͉̟͇̰͉̬͉͚̙̯̜͎͍̟͕͓̝͖̱͓̱̣͔̺̦̻͔̠̬̟̯̣̟̙̤̣͇̙̩̺͕͈̠͖̬̞̱̲͉̭̙̤̖̮̳̱̭̱̲͔̥̠͇̪̠̼͍̼͎̳̫̒̒̀͛͛͑́̓̾̋̽̐̉̍͆̋̅͌̀̊̎̄̾̿́̽͂̈͋̉͛́͌͗͂́́͗̊̓͌͒̿̆̅̾͆̈̓̏̑̈́̿͊̆̉̾̆͌́̾̉̿͂͌͌͒̄͆͂͗̋̈̀́̈́̄̈́̂̄̈̀̈́͒̽̋̀̕̚͘̕͘̕̚̚̕͜͜͜͜͠͝͝͝͠͝͠͝͠͝ͅͅͅͅͅz̵̨̢̢̢̨̨̢̢̧̛͖̘͈̠̺̝̫̲̭̻͖̠̬̠̺̭̬̣͈̘͉͈̠̙̱̹̞͓̼͈̭̰͇͍͇̰̹̯̲̟̼͇̪͔͔̝̲͙͕̝̱̥̯̮̖͙̮͕̘͎̞̹̪̓̾͊̒͛̈́͐̽̏̈͌̓̔̉͛͆̀̈́̅̈́̿̀͌̏͒̂̐̽͌̾͆̀͛̂̃̇͆͐͋̀̈́̀͜͜͜͜͝͝ͅͅͅå̶̢̨̧̨̡̧̧̨̧̨̨̧̨̛̛̛̛̛̛̛̼͔̖̗̜͖̫̦̘͙̞̮̪̥͔̤͙͔͚͕̦͔̘̩͇̖̼̩̦̦̻̫̻̭̭͓͍̙̞̼̹̖̪̥͙͕̖̞͔̞̯͕̲̤͙͓̺̹̖̮̞̺̩͎̤̳̟̳̭̪̠̭͕̣͙̤̻̤̩͔̭̰̖̝̭̗̹̬̳̼̺͍̻͙̰̦͓̻̠͕̪̮̬͖̝͓̬̝̹̪̖̟̭̩͎̠̳̗̹̬̼̲̳̪̈́̓̄̔̂͗̊͛̑̀̀́̋͌͐͂̀̈̽́͗̑̿̅̋͆́̇̓̏̓̄̌̃͌̓̀̆̅͒́̍̀̋̾̊̈́̅̒̆̂̌̈́̑̀̍̓̊͒̑̉̂̓͆͌͑̐͒̈́̀̃͂͐́̅̆̅͂́̒̐̇̑̆̇̀̎̐̔̄͐̈́͆̍͂̊̉͊̉̂̍̋͊͑̎́̽̄͌̈́́͌͛̈́̔́͌̆̈́͛͊̊̎͊̂̌̇̐̏̉̀̃̆̓̂͂̒͗̀̍̈́̈́̀̔̈̆͛̔̍̇̇̐̓̿̿͌̍͑͊̈́̒̏̐̍̂̏̔̃͌̿̀̒̈́͗̈́͑̇̔̌̄̆̔͂͗̉̓͂͋̈́̍̃̊̎͆͌̋̍̅̽̊̇̿̃͂̽͑̍̎̒̈̄̉͐̅̎̔̇͋͆̍̄̕̚̕͘̚̕̕̚̚̚̕͘̕͜͜͜͝͝͝͠͠͝͝͝͝͝͝͠͝͝͝͝͝͠ͅz̶̧̧̧̧̨̢̧̢̨̢̡̨̡̢̨̧̢̨̡̢̧̧̛͇̬̗̖̭̪̥̭̯̹̗̻̝͓̯̤̙̗̬̻̖̮̱͙͔̬͕̯̜͔͎̣͙̯̤̹̤̣̻̣̺̺̟̜͓̭̜̜̺̻͈̘̯͖͔͉͕͙̯͚͇͈͚̘̺̲̻̺͍͈̝̮͓͍̪͍̖̦̖͉͉͕͕͇̪͔̞͎̪̥̲͈̪͙͍͇̠̖̦̞̗̫͈͎̼̤̬̪̗̻͓͈̥̖̤͔̬̞̩͍̯̭̯̮̘̮͖̤̮͓̖͓͎̝̱̮̦̦̺̝̠̩̞͕̝̪͙̱̫͈̙̬̞͔̼̠̠̰͕͖͖̹̃̈͂͋̓̌̿͑̅̈́̒͛͊̈́̈͗͂̌͊̔̓̉̀͆͊͜͜͜͝͝ͅͅͅͅͅa̵̡̧̧̡̡̢̨̡̧̧̨̡̡̧̨̧̡̡̢̧̨̨̢̢̨̡̨̢̧̛̛̛̛̰͈̲̞̤͍̹̹̯̬̻̣̻̺̺̻̘̖̱̭̮̖̪̥̱̘̗̞̼͔͉͚̹̖̪̩̪̱̺͍̺̯͈̺̫͈̼̮̪͍͙̺͓̱͈̝͓͇̩͇̤̟̙̙̰̯̖͎̪̝͖̺͓͇̝̹͈̖͉̲̞͍̭͍̙͇̜̹̭̰̜̹̼̼̮̖̱͍̥̮̖͍͙̫̜̠͓͇̫͈̪̪̙̠͕̺̯͉̟̖͕̦͕̳̙͓̯͈̬͓̘̭͙̯͎͎̙̗͕̮͚̙̘̪͉̰͚̭͕̟̪̦͍̹͕̹̙̻̦̜͍̖̟̯̹͈̟̟͕̠̮̰͙̦̹̲̠̣̜͍̖̱̮̺͓̦̬̤̙̭͚̪̯̫̖̙̬͉̙̳̹̹̟̪͙͚͍͓͓̝̤̹͔̙̥͚̫͇̹̝̙̲̬̞͇̱̻͈͕̱̦̤̫̪̟̣̩̭̜͇͈̼̪͊͊̆͗̂͗͂̓̎͗͋̄͂͊͐͗̈́̀͐̃͂͗̀͂̐̾͒̌̒̎͌͛̀̌͛͊́̽̽̋̽̏̃͒̄͋̽̓́̒̽͋̊̆̋̃͗̓͒͋̓̉͂̿̒̏̀̅̿̔̃̀̽̏͗̈́̽̄͋̐͒̈́͒̐̃̀͂̎̋́̐̈́́͑́̀̊̄̍̉͐̑̈́̃̾͛̔̒͌̂̍̈̊͗̊̽̈́̅̎͆̍̄͗̊̓͆́̊̍́̈̄͋͊͂͊̄́̅̈́̀̊̃̇̑̓̓̾͛̈́̀̔͒̓̔̌̃̈͛͐̇̾̓̓̆̅͂́̓̇͑̈́̈̌̈̿͗͐͂̽̆͆̊̏̏̄̄̓̆̿̏͋̈̿̑̾͒͆͂͑͐̀̃́̈̈́͛̇̀̊̇̓̈́̎̍͆͐̀̓̒̿̋͆̓̀̍̓̌̐̀̿̃̉̋̆́̑͌̋̆̎̋̔̓͆̌̈͆̾̀̍̾̊̍́͂͋̚̚͘͘͘͘͘͘͘͘̕͘̕̚̚̕̚̕̕̚͜͜͜͜͜͜͝͝͝͠͝͠͝͠͝͝͠͝͝͝͝͠͝ͅz̷̧̢̡̡̧̡̨̡̨̢̨̢̧̢̧̛̲̠̻̹̱͖̖̜̻̤͉̣̮̮̲̗͔̹̻̗̘̹̩͎̗̗͓̥͖͙̱̺͔͖͖̙̥̫̗͙͖̮̳̗̼̩͇̞̮͍̯̗̰̲͔̯̪̩̮̞̰̪̖͙͙̖̖͙̘̰̞̟͚̬͔̠̣͈̞̟̼̝̰̱̤͈̳̠̗̳͇̤̣͍̥̳̝̱̝̣͇̻̫̲̜̝̮͉̥̲̥͕̻̬͚̭͉̲̪̲̲͖̝̖̜͓͈̝͓̙̻͈̙̜͚͇̘̯̝̱̱͖̦͍͈̖̹̳̫̓̅̉͑̉̆̓͊͆͂̄̃̀͗̇̂̃̊͋̈́̆̀̀̊̆̂́͋̔̀̚̚̕͜͜͜͜͜͝͠͠͝͠͠ͅͅͅͅͅͅā̵̡̨̨̡̡̧̧̨̧̢̨̢̢̡̨̨̧̨̢̛̛̛̛͙̰̼̜͈̯̪͉͉͕̠̥̦̤̳̤̜͖̱͉̫͔͇̼͉̫̻͇̤̠̭͍̖̘̠̳̝͇͔͇͓̟̖͈͖̣̝̙̘̰̫̥̜͕͉̯̹͖̞̻̞͙̟̺̲̩̝̦̖̠͍̬̤͓̙̪̘͈̹̱̺̲͍̥̖̫̙̲͚̼̲̥̗̩̜̱̣̞̱̫͍͍̙̲̦̙͓̟̙̗̬̰̱̜̝͎͖̬̣̞̘͔̬̯̳͕̼͍̰͍̘͎̙̙̘̭̘̜͎̞͕̟̭̖͇̹̲̲̹̼̳͔̯̥̗̘̣̺͓̲̠͙̠͔̱̘̱̥͈̰͇̭͇̯̳̯̻͙̘̖̫̰̘̻̲̼̗͉͕̻̜̭̝̖̬̬͖͒̃́͋͑̏̎͌́̓͋͑͆͑̅̑͗̑̀̋̓́̀̋̒͛̈̿̌͐͒͌͊͊̄͗̓̍̃͆̓̓̏́̃̂̍͛̋̐́̿̂̌̎͂̂̐͑̽̏́͊̇̂͒̎̐̇̅̀͌͗̔̄̄͂̋̔̔̊̂̾̑̍̐͌̌͐̿͆̃̀̀͆̓̿̄́̾̎̍̋̎̎̃͋̇͛́͆̑́̋̀́͒͌̔̈́̀̆̄́͛̂̿͌̓̋̂̿̋͛͂̽̇̌͊́̉̄̏̓̄͊͑̇̑̂̇̾̉͋̇̅̃̌̃̉̎̃͂͊͑̌͘̚̚͘̚͘̕̚̚̚̕̚̚̚͜͜͜͝͝͝͠͠͝͠͝͝͠͠͠͝͝ͅͅͅ 
        </p>
      </div>

      {/* Caractères dispersés partout */}
      {characters.map((char, index) => (
        <div
          key={index}
          className="absolute text-green-400"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            fontSize: `${Math.random() * 3 + 1}rem`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: `${Math.random() * 0.8 + 0.2}`,
            fontFamily: "'Noto Sans Warang Citi', sans-serif",
          }}
        >
            <p className='text-red-700'> z̶̢̢̡̢̢̢̨̨̡̨̛̛̛̛̛̻̦͓̣̹͍̳͈̟͉͇̼̮̪͓͎̣̫̼͎̫̰͔̤̞̙̲͓̼͓̘̣͇̜͔̟̭̰̼͎̰̣̺͙̞̻͔͖͉̞̮͓͖̖͇̮̘̞̝̣͈̝͉̤̘̝̭̣͎̫͙͖̪̬͕͍͓̥̮̦̳͈͈̘̥̥̥͓̗͓̰̰͉̭̩̥̰͉̩̻̘̻̝̞̹̪͈̜͇͈͔͔̖̬͈͇̳͉̼̙̝͉̻͖̘̼̹̟̤̼̥͎̖̫̟̹̩̩͉͕̞̯̼̥̮̱̞̲͖͕̠̭̟̖͙̫̲͓̤͍͖̗̼̻̤̝͉͇̪̤̪̭̪̲̤̟͚͇̰̻̭̯͔̫͔͕͕͍̱͂͐́̌̀̒͊̾͋̈͌̽͛̑̏̉͌̎̐̈́̂͑̈́̊̔̐̓̓̃͑̑̎́̇͋̉̇͒̈́́̾̀͑̔̌̅̆̈́̿̎̈̒̿͗̉̎̓͒̊̓̽̒͂͋̈́̑͋̉͋̌́̊̎͐̈́̊̍̈́͌͐̿̇̎̆́̂͂͒͒̒̂̇̾̋̃̀̅͆̇̎̀͑̈́͒̏̈́̍̽̂̇̃̌̍̕̚̚̚̚͜͜͜͠͠͝͝͠͝͝͠͠͝͝͝ͅͅͅͅǎ̸̧̧̧̡̨̧̨̨̢̨̡̧̠͔͎̮͕̘̤͉͉͖̭͉̥͉̻̼͈̮͓̗̗̫̘̣̭͈͖̱̼̟̗̝̩̫͔̻̮̘̳̤̰͓͕̦̺̱̻̟̜̹̘̹̫̭͈͙̖̭̞̠̱̠̼̗͉̥̭͙̣̩̖̲̬͕͇̩͔̩̱̲̻̞̤̟͖͙̝̞̹̲̰͈̠̰̳̭͕̮̭̟͚̟͇̲̲̞͇̹̬̯̮̟͙̞͚̻̞̮̗͎̣̤͕̘̤̯̍̐̈́́̽̈́̂̒̏͑̒̈͌̃̚̕͜͜͝ͅͅͅͅͅz̸̨̢̧̨̡̨̡̡̢̧̢̨̢̨̡̛̛̛̛̛̩̗͚̦̝̼̭̯̹̪̩̭̜͎̣̬̦̳̟̗̦̝̝͔̘̼̘̺̙̖̠̹͍͖̼͉̝̰̣̦̠̥̼̰̲̦̟̤̤̺̹̻̘͙͚̥̩̗̦̙̣̟͓̘̰̠̪̝͖̰͓̻̱̲̬͉̪̫̞̩͙̟̜̥͚̥͕̖̬̦͉̭̹̥͇̖̳̫͉̳̖͓̳͚̠̝͔͈̹̥̣͖̪̫̖͇̩͓̙͉̭̲͓͈̥̮͎̭̤̼͙̙͖̪̙̬͎̠͍̰̹͚̲͖̗̦̗͇̪̹̤͓̩̬̹̘̣̖̯͓͉̪̹̀͑̆̀̋͂̈́̉̓̏̏̽̎̅̒̃̒̅̏̃̈̽͌̑̐́̿̔͂̔͐͒̎̍́͑̒̾̔̌́̍̐̓̊̈́̑͂̈̉̀̓̓́̑̍̈́͛̔̿́̓̃͐̌͌̉͑̽̅̀̉̀́́͋̈̒̋̅̉̓̽͌̇͑̈́̋͆͂̌̀͒̅̈́̽̾͛͌̃̒͌́̾̀̐̃͊̅̅͆̋͛̏̽̃͑̔̎͒̍̔͊͗̀͊͒͌̊̆͂̑͘̚̕̚̕͘̕̕͜͜͜͝͝͝͠͝͠͠͝͝͝͝ͅͅͅͅą̶̡̢̧̡̢̢̨̢̨̢̨̢̨̨̡̧̧̧̡̡̡̛̛̛̛̛̛̛̛̥̬͕͚̹͇̲̥̫̜͇͖̬͇̟͓̜̮͇͙̙̻͖̳͇̪͔̙̥̝̱̱̪̼̗̙̝̯̙͉̰͍͓̰̖̙̬̣̱̺̫̪̖̘̙̜̬͚̫͔̰̳͈̭̹̜̘̹͖̜̯̠̞̠̹͇̦̞͚̲̖̬͔͖͕͉̣̗̤̩̩̗͙͚̱̭̗̣̭̦͚̣̳̘̗͕̮̜͔̰̜̜̗͓̺̫̥̰̫͎͖̦͈͔̗͕̣̞̭̬͖͍͓̲̤͔̰͇͎̞͕͚̘̪̰̘̲͎͖̭̤͉̞͍̬̻͕͇͇͈͕̫̟̺͎̖̠̭̺̞̙̠̻̹̻̝̣͚̟̟̭̠̙̲̰̬͔̝̝̳̠̜̩̱͙̙͍̼̲̲̣͎͙̼̳̮̪̘̩͕̟̜͔̙̙̘̜͉͈̞̣͈͎̣̎͂̒̂͐̇̔̎̄̀̿̓̅͆̍̆̑͋̇̐̀̾͆̐̆̌̌́́̈́̓͋́̐͌̈́̋̆̓͐̈̎̾̌͗́͑̏͛̾́̄̑̎̄̃̓̅́̒͆̆́̾̉̏͆̅̄̍̿̅̀͋͛̾͆͌́͋̈́̾͂̑̆͐̑̈̇̇̋̾̀͆̇̾͑̐͆̇͌̏́́̃̀͐̌̄́͂̋̅̒̒́̀̅͗̽͗̎́̈̈̾͊̈͑́́͆̊͌̓̋̾͂̾̉̈̓̓̀̆̌̊̃̍̔͗̑̓͒͛̑͌̒̂͑̓̎̍́̈́̈́̏̏̀̉̿̃̀̏͑̒̽̆͒̽͐͌̓̆͐̈̑̀́͗̅̆̿̈̈̀̂͆̉̅̑͛͑̇̀̉̚̕͘̕͘͘͘͘̚̕̕̕̕̕̚͘͜͜͜͜͜͝͝͝͝͠͠͝͝͝͝͠ͅͅͅͅͅͅz̷̨̢̢̡̨̨̡̢̧̡̨̛̛̛̛̛͚̰̟̼͕͖͖͚̮̟͚̗̼̝͔̥͓͙̙̪̭̥̲̳̜̺̜̬͉͍͉͍̭͙̖̪̹̗̞̦̰̜̖͕͈͖̹̟̘͍͕̙̮̲̭̠̺͙̣̱̬͔̯̣̬͕̙̪̟̼̘̼̲̦̠̮͔̳͈̤̘̖̻͍͈̦̹͇͖͍̼̣͖͔̞͎̗̰͍̳̩̱̦̤͓͕̣̲̘͓̠̙͌͒̃̇͋̿͑̋͌̀̃̏̐̎̾͊̒͂̑̃̉̃̓͋̀͂̆̒̎͆̑̎͗̽͐̃̉̽̽́̓̌̑̾̿̌̓͗̔̓̋̓̽̓̑̀̉̄͊̏̌̈̈́̓̃͂͋͑̄̇̿̉̇́́͑̃́͊͌̏̌̓̀̃͊̀͆̑̑̐͂̃͒̒̊͌͛̓͗̅͌͐̐̇̿̓͊͛͋̉͒̉͊̍͆̾̅͛̒̋̀̄̄̄̓̐̈́́̆̑̊̔͑̀̊̃̏̈́̈́̀͐͋͑̂̈́̿́͗̋̿͗́̀͋͐̉͛̿̅͗̓͒̂́̓̂̈̍͊̀͂̏̾̐̉̈́̍̎̀̏̈́͛̚̚͘̕̚̕̕̚͘̚͘̕͜͜͝͝͠͝͝͠͠͝͠͝͠͠͝͝ͅͅa̴̡̨̨̧̢̨̡̨̧̢̡̡̡̡̡̛̛̛̛͖̣͖̰̣̯͙̬͚̻̫̘̞̺̖̩͍̗̺͕͈̞͍̳̘̫̺̝̲̗̮̤̪͈̘͈̻̻̺͕̦͇̝̺͈̳̗̲̮͉͕̻̜͔͖͖͉͍̙̘̙̝̗̭̩̲̳͇̱͙̱͉͉̮̪̩͓̺̖͍͚̫͇̭͓͙̖͓̟̳̹͖̫̩̖̺͙̞̭͓͍͉͓̪̘͖͉̗̜̖̻̬̥̼̼̞̳̘̠͉̟͇̰͉̬͉͚̙̯̜͎͍̟͕͓̝͖̱͓̱̣͔̺̦̻͔̠̬̟̯̣̟̙̤̣͇̙̩̺͕͈̠͖̬̞̱̲͉̭̙̤̖̮̳̱̭̱̲͔̥̠͇̪̠̼͍̼͎̳̫̒̒̀͛͛͑́̓̾̋̽̐̉̍͆̋̅͌̀̊̎̄̾̿́̽͂̈͋̉͛́͌͗͂́́͗̊̓͌͒̿̆̅̾͆̈̓̏̑̈́̿͊̆̉̾̆͌́̾̉̿͂͌͌͒̄͆͂͗̋̈̀́̈́̄̈́̂̄̈̀̈́͒̽̋̀̕̚͘̕͘̕̚̚̕͜͜͜͜͠͝͝͝͠͝͠͝͠͝ͅͅͅͅͅz̵̨̢̢̢̨̨̢̢̧̛͖̘͈̠̺̝̫̲̭̻͖̠̬̠̺̭̬̣͈̘͉͈̠̙̱̹̞͓̼͈̭̰͇͍͇̰̹̯̲̟̼͇̪͔͔̝̲͙͕̝̱̥̯̮̖͙̮͕̘͎̞̹̪̓̾͊̒͛̈́͐̽̏̈͌̓̔̉͛͆̀̈́̅̈́̿̀͌̏͒̂̐̽͌̾͆̀͛̂̃̇͆͐͋̀̈́̀͜͜͜͜͝͝ͅͅͅå̶̢̨̧̨̡̧̧̨̧̨̨̧̨̛̛̛̛̛̛̛̼͔̖̗̜͖̫̦̘͙̞̮̪̥͔̤͙͔͚͕̦͔̘̩͇̖̼̩̦̦̻̫̻̭̭͓͍̙̞̼̹̖̪̥͙͕̖̞͔̞̯͕̲̤͙͓̺̹̖̮̞̺̩͎̤̳̟̳̭̪̠̭͕̣͙̤̻̤̩͔̭̰̖̝̭̗̹̬̳̼̺͍̻͙̰̦͓̻̠͕̪̮̬͖̝͓̬̝̹̪̖̟̭̩͎̠̳̗̹̬̼̲̳̪̈́̓̄̔̂͗̊͛̑̀̀́̋͌͐͂̀̈̽́͗̑̿̅̋͆́̇̓̏̓̄̌̃͌̓̀̆̅͒́̍̀̋̾̊̈́̅̒̆̂̌̈́̑̀̍̓̊͒̑̉̂̓͆͌͑̐͒̈́̀̃͂͐́̅̆̅͂́̒̐̇̑̆̇̀̎̐̔̄͐̈́͆̍͂̊̉͊̉̂̍̋͊͑̎́̽̄͌̈́́͌͛̈́̔́͌̆̈́͛͊̊̎͊̂̌̇̐̏̉̀̃̆̓̂͂̒͗̀̍̈́̈́̀̔̈̆͛̔̍̇̇̐̓̿̿͌̍͑͊̈́̒̏̐̍̂̏̔̃͌̿̀̒̈́͗̈́͑̇̔̌̄̆̔͂͗̉̓͂͋̈́̍̃̊̎͆͌̋̍̅̽̊̇̿̃͂̽͑̍̎̒̈̄̉͐̅̎̔̇͋͆̍̄̕̚̕͘̚̕̕̚̚̚̕͘̕͜͜͜͝͝͝͠͠͝͝͝͝͝͝͠͝͝͝͝͝͠ͅz̶̧̧̧̧̨̢̧̢̨̢̡̨̡̢̨̧̢̨̡̢̧̧̛͇̬̗̖̭̪̥̭̯̹̗̻̝͓̯̤̙̗̬̻̖̮̱͙͔̬͕̯̜͔͎̣͙̯̤̹̤̣̻̣̺̺̟̜͓̭̜̜̺̻͈̘̯͖͔͉͕͙̯͚͇͈͚̘̺̲̻̺͍͈̝̮͓͍̪͍̖̦̖͉͉͕͕͇̪͔̞͎̪̥̲͈̪͙͍͇̠̖̦̞̗̫͈͎̼̤̬̪̗̻͓͈̥̖̤͔̬̞̩͍̯̭̯̮̘̮͖̤̮͓̖͓͎̝̱̮̦̦̺̝̠̩̞͕̝̪͙̱̫͈̙̬̞͔̼̠̠̰͕͖͖̹̃̈͂͋̓̌̿͑̅̈́̒͛͊̈́̈͗͂̌͊̔̓̉̀͆͊͜͜͜͝͝ͅͅͅͅͅa̵̡̧̧̡̡̢̨̡̧̧̨̡̡̧̨̧̡̡̢̧̨̨̢̢̨̡̨̢̧̛̛̛̛̰͈̲̞̤͍̹̹̯̬̻̣̻̺̺̻̘̖̱̭̮̖̪̥̱̘̗̞̼͔͉͚̹̖̪̩̪̱̺͍̺̯͈̺̫͈̼̮̪͍͙̺͓̱͈̝͓͇̩͇̤̟̙̙̰̯̖͎̪̝͖̺͓͇̝̹͈̖͉̲̞͍̭͍̙͇̜̹̭̰̜̹̼̼̮̖̱͍̥̮̖͍͙̫̜̠͓͇̫͈̪̪̙̠͕̺̯͉̟̖͕̦͕̳̙͓̯͈̬͓̘̭͙̯͎͎̙̗͕̮͚̙̘̪͉̰͚̭͕̟̪̦͍̹͕̹̙̻̦̜͍̖̟̯̹͈̟̟͕̠̮̰͙̦̹̲̠̣̜͍̖̱̮̺͓̦̬̤̙̭͚̪̯̫̖̙̬͉̙̳̹̹̟̪͙͚͍͓͓̝̤̹͔̙̥͚̫͇̹̝̙̲̬̞͇̱̻͈͕̱̦̤̫̪̟̣̩̭̜͇͈̼̪͊͊̆͗̂͗͂̓̎͗͋̄͂͊͐͗̈́̀͐̃͂͗̀͂̐̾͒̌̒̎͌͛̀̌͛͊́̽̽̋̽̏̃͒̄͋̽̓́̒̽͋̊̆̋̃͗̓͒͋̓̉͂̿̒̏̀̅̿̔̃̀̽̏͗̈́̽̄͋̐͒̈́͒̐̃̀͂̎̋́̐̈́́͑́̀̊̄̍̉͐̑̈́̃̾͛̔̒͌̂̍̈̊͗̊̽̈́̅̎͆̍̄͗̊̓͆́̊̍́̈̄͋͊͂͊̄́̅̈́̀̊̃̇̑̓̓̾͛̈́̀̔͒̓̔̌̃̈͛͐̇̾̓̓̆̅͂́̓̇͑̈́̈̌̈̿͗͐͂̽̆͆̊̏̏̄̄̓̆̿̏͋̈̿̑̾͒͆͂͑͐̀̃́̈̈́͛̇̀̊̇̓̈́̎̍͆͐̀̓̒̿̋͆̓̀̍̓̌̐̀̿̃̉̋̆́̑͌̋̆̎̋̔̓͆̌̈͆̾̀̍̾̊̍́͂͋̚̚͘͘͘͘͘͘͘͘̕͘̕̚̚̕̚̕̕̚͜͜͜͜͜͜͝͝͝͠͝͠͝͠͝͝͠͝͝͝͝͠͝ͅz̷̧̢̡̡̧̡̨̡̨̢̨̢̧̢̧̛̲̠̻̹̱͖̖̜̻̤͉̣̮̮̲̗͔̹̻̗̘̹̩͎̗̗͓̥͖͙̱̺͔͖͖̙̥̫̗͙͖̮̳̗̼̩͇̞̮͍̯̗̰̲͔̯̪̩̮̞̰̪̖͙͙̖̖͙̘̰̞̟͚̬͔̠̣͈̞̟̼̝̰̱̤͈̳̠̗̳͇̤̣͍̥̳̝̱̝̣͇̻̫̲̜̝̮͉̥̲̥͕̻̬͚̭͉̲̪̲̲͖̝̖̜͓͈̝͓̙̻͈̙̜͚͇̘̯̝̱̱͖̦͍͈̖̹̳̫̓̅̉͑̉̆̓͊͆͂̄̃̀͗̇̂̃̊͋̈́̆̀̀̊̆̂́͋̔̀̚̚̕͜͜͜͜͜͝͠͠͝͠͠ͅͅͅͅͅͅā̵̡̨̨̡̡̧̧̨̧̢̨̢̢̡̨̨̧̨̢̛̛̛̛͙̰̼̜͈̯̪͉͉͕̠̥̦̤̳̤̜͖̱͉̫͔͇̼͉̫̻͇̤̠̭͍̖̘̠̳̝͇͔͇͓̟̖͈͖̣̝̙̘̰̫̥̜͕͉̯̹͖̞̻̞͙̟̺̲̩̝̦̖̠͍̬̤͓̙̪̘͈̹̱̺̲͍̥̖̫̙̲͚̼̲̥̗̩̜̱̣̞̱̫͍͍̙̲̦̙͓̟̙̗̬̰̱̜̝͎͖̬̣̞̘͔̬̯̳͕̼͍̰͍̘͎̙̙̘̭̘̜͎̞͕̟̭̖͇̹̲̲̹̼̳͔̯̥̗̘̣̺͓̲̠͙̠͔̱̘̱̥͈̰͇̭͇̯̳̯̻͙̘̖̫̰̘̻̲̼̗͉͕̻̜̭̝̖̬̬͖͒̃́͋͑̏̎͌́̓͋͑͆͑̅̑͗̑̀̋̓́̀̋̒͛̈̿̌͐͒͌͊͊̄͗̓̍̃͆̓̓̏́̃̂̍͛̋̐́̿̂̌̎͂̂̐͑̽̏́͊̇̂͒̎̐̇̅̀͌͗̔̄̄͂̋̔̔̊̂̾̑̍̐͌̌͐̿͆̃̀̀͆̓̿̄́̾̎̍̋̎̎̃͋̇͛́͆̑́̋̀́͒͌̔̈́̀̆̄́͛̂̿͌̓̋̂̿̋͛͂̽̇̌͊́̉̄̏̓̄͊͑̇̑̂̇̾̉͋̇̅̃̌̃̉̎̃͂͊͑̌͘̚̚͘̚͘̕̚̚̚̕̚̚̚͜͜͜͝͝͝͠͠͝͠͝͝͠͠͠͝͝ͅͅͅ </p>
          {char}
        </div>
      ))}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Warang+Citi&display=swap');
        body {
          background-color: black;
        }
        .font-warang {
          font-family: 'Noto Sans Warang Citi', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Kira;
