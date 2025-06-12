<div class="mt-7">
    <label for="photoUrl"> Photo : </label>
    <input type="text" (model)="photoUrl()" id="photoUrl" placeholder="https://... ou nom-fichier.jpg " accept="image.png,image.jpg" required
    class="w-full md:w-80 px-3 h-10 rounded-l border-2  border-[#2C3E50] text-[#333333] focus:outline-none focus:border-[#2C3E50]" />
   
    @if (photoUrl().trim() !== '') {
        <img [src]="photoUrl()" alt="Photo du contact" class="mt-4 h-32 rounded shadow" />
      }
   <div>
</div>

<button type="submit" class="mt-12  bg-[#2C3E50] text-white rounded px-3 py-1 hover:bg-[#5DADE2] transition">Ajouter contact</button>


</div>




 @if(contactAjoute() !== null) {
      <p class="mt-4 p-3 bg-green-100 text-green-800 rounded">
        Contact {{ contactAjoute()?.typeDeContact }} ajouté : {{ contactAjoute()?.nom }}
      </p>
    }