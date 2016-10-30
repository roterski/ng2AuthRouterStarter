import { ErrorMessagesPipe } from './error-messages.pipe.ts';

describe('ErrorMessagesPipe', () => {
  let pipe = new ErrorMessagesPipe;

  describe('when requirement error is passed', () => {
    let arg = {
      'required': true
    };

    it('returns array of error strings', () => {
      expect(pipe.transform(arg)).toEqual(['is required']);
    });
  });

  describe('when minLength error is passed', () => {
    let arg = {
      'minlength': {
        'actualLength': 2,
        'requiredLength': 3
      }
    };

    it('returns array of error strings', () => {
      expect(pipe.transform(arg)).toEqual(['must be longer than 2']);
    });
  });

  describe('when maxLength error is passed', () => {
    let arg = {
      'maxlength': {
        'actualLength': 4,
        'requiredLength': 3
      }
    };

    it('returns array of error strings', () => {
      expect(pipe.transform(arg)).toEqual(['must be shorter than 4']);
    });
  });

  describe('when pattern error is passed', () => {
    let arg = {
      'pattern': {
        'actualValue': 'aa',
        'requiredPattern': '^bb$'
      }
    };

    it('returns array of error strings', () => {
      expect(pipe.transform(arg)).toEqual(['must match /^bb$/ pattern']);
    });
  });

  describe('when error is an array', () => {
    let arg = ['error1', 'error2'];

    it('returns array of error strings', () => {
      expect(pipe.transform(arg)).toEqual(['error1', 'error2']);
    });
  });

  describe('when error is full_messages', () => {
    let arg = {
      'full_messages': ['error1', 'error2']
    };

    it('returns array of error strings', () => {
      expect(pipe.transform(arg)).toEqual(['error1', 'error2']);
    });
  });

  describe('when argument is undefined', () => {
    it('returns undefined', () => {
      expect(pipe.transform(undefined)).toEqual([]);
    });
  });
});
