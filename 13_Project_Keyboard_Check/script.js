const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="bg-gray-800 p-6 rounded-xl shadow-xl">
      <table class="table-auto border-collapse w-full text-left text-lg">
        <thead>
          <tr class="text-yellow-400 border-b border-gray-600">
            <th class="py-2 px-4">Key</th>
            <th class="py-2 px-4">Key Code</th>
            <th class="py-2 px-4">Code</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-white">
            <td class="py-2 px-4">${e.key === ' ' ? 'Space' : e.key}</td>
            <td class="py-2 px-4">${e.keyCode}</td>
            <td class="py-2 px-4">${e.code}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
});
