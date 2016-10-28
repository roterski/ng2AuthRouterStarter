import { ErrorMessagesPipe } from '../../app/shared/error-messages.pipe.ts';

describe('ErrorMessagesPipe', () => {
  let pipe = new ErrorMessagesPipe;

  describe('when requirement error is passed', () => {
    let arg = {
      'required': true
    };

    it('returns errors string', () => {
      expect(pipe.transform(arg)).toBe('is required');
    });
  });

  describe('when minLength error is passed', () => {
    let arg = {
      'minlength': {
        'actualLength': 2,
        'requiredLength': 3
      }
    };

    it('returns errors string', () => {
      expect(pipe.transform(arg)).toBe('must be longer than 2');
    });
  });

  describe('when maxLength error is passed', () => {
    let arg = {
      'maxlength': {
        'actualLength': 4,
        'requiredLength': 3
      }
    };

    it('returns errors string', () => {
      expect(pipe.transform(arg)).toBe('must be shorter than 4');
    });
  });

  describe('when pattern error is passed', () => {
    let arg = {
      'pattern': {
        'actualValue': 'aa',
        'requiredPattern': '^bb$'
      }
    };

    it('returns errors string', () => {
      expect(pipe.transform(arg)).toBe('must match /^bb$/ pattern');
    });
  });

  describe('when argument is undefined', () => {
    it('returns undefined', () => {
      expect(pipe.transform(undefined)).toBe(undefined);
    });
  });
});
