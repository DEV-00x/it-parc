// Search functionality
function initSearch() {
    const searchInput = document.getElementById('tableFilter');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('table tbody tr');
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
}

// Status filter functionality
function initStatusFilter() {
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            const selectedStatus = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('table tbody tr');
            
            tableRows.forEach(row => {
                if (!selectedStatus) {
                    row.style.display = '';
                    return;
                }
                
                const statusCell = row.querySelector('td:nth-child(4)');
                const status = statusCell.textContent.trim().toLowerCase();
                row.style.display = status === selectedStatus ? '' : 'none';
            });
        });
    }
}

// Delete confirmation
function initDeleteConfirmation() {
    document.querySelectorAll('.delete-confirm').forEach(button => {
        button.addEventListener('click', function(e) {
            if (!confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
                e.preventDefault();
            }
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initStatusFilter();
    initDeleteConfirmation();
});
