/**
 * ChatOPC - Main JavaScript
 * Handles interactions and animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // Auto-resize textarea
  const chatInput = document.querySelector('.chat-input');
  if (chatInput) {
    chatInput.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 150) + 'px';
    });
    
    // Enable submit button when there's content
    chatInput.addEventListener('input', function() {
      const submitBtn = document.querySelector('.chat-submit-btn');
      if (submitBtn) {
        if (this.value.trim()) {
          submitBtn.style.background = 'var(--color-btn-primary)';
        } else {
          submitBtn.style.background = 'var(--color-text-muted)';
        }
      }
    });
    
    // Handle Enter key (submit) and Shift+Enter (new line)
    chatInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    });
  }
  
  // Handle submit
  function handleSubmit() {
    const input = document.querySelector('.chat-input');
    const value = input?.value.trim();
    if (value) {
      console.log('Submitting:', value);
      // Here you would send to your backend
      // For demo, we'll just show an alert
      showNotification('消息已发送: ' + value.substring(0, 50) + (value.length > 50 ? '...' : ''));
      input.value = '';
      input.style.height = 'auto';
    }
  }
  
  // Submit button click
  const submitBtn = document.querySelector('.chat-submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmit);
  }
  
  // Action tags click handler
  const actionTags = document.querySelectorAll('.action-tag');
  actionTags.forEach(tag => {
    tag.addEventListener('click', function() {
      const text = this.querySelector('span')?.textContent;
      const input = document.querySelector('.chat-input');
      if (input && text && text !== '更多') {
        input.value = `帮我${text}`;
        input.focus();
        input.dispatchEvent(new Event('input'));
      }
    });
  });
  
  // Feature cards click handler
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('.feature-card-title')?.textContent;
      const input = document.querySelector('.chat-input');
      if (input && title) {
        input.value = `我想使用 ${title} 功能`;
        input.focus();
        input.dispatchEvent(new Event('input'));
        // Smooth scroll to input
        document.querySelector('.chat-container')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    });
  });
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      // For a full implementation, you'd toggle a mobile menu
      showNotification('移动菜单功能开发中...');
    });
  }
  
  // Simple notification system
  function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-btn-primary);
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      font-size: 14px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      z-index: 1000;
      animation: slideUp 0.3s ease;
    `;
    
    // Add animation keyframes if not exists
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style');
      style.id = 'notification-styles';
      style.textContent = `
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideUp 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Add hover effect to feature cards
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  console.log('ChatOPC initialized successfully! 🚀');
});
